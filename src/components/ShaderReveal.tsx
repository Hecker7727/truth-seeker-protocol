import React, { useEffect, useRef } from 'react';

// Lightweight WebGL shader reveal using raw WebGL API to avoid heavy deps
// This is a simplified effect that reveals a gradient mask behind text as time progresses.

const vertexSrc = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = (a_position + 1.0) * 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentSrc = `
precision mediump float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_res;
void main(){
  // radial mask sweep
  vec2 p = v_uv - 0.5;
  float r = length(p);
  float t = fract(u_time * 0.2);
  float mask = smoothstep(t, t + 0.2, 1.0 - r);
  vec3 col = mix(vec3(0.0), vec3(0.36, 0.88, 0.90), mask);
  gl_FragColor = vec4(col, mask);
}`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

const ShaderReveal: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext('webgl', { premultipliedAlpha: true, alpha: true });
    if (!gl) return;
    const vs = createShader(gl, gl.VERTEX_SHADER, vertexSrc);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const verts = new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_res');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 240;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resize);
    resize();

    const start = performance.now();
    const draw = () => {
      const t = (performance.now() - start) / 1000;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="w-full h-[240px] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white mix-blend-overlay">Revealing Potential</h2>
      </div>
    </div>
  );
};

export default ShaderReveal;