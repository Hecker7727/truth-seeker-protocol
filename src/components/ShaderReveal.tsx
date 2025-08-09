import React, { useEffect, useRef } from 'react';

// Full-viewport pixel fill effect using raw WebGL

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

// Pixelate helper
vec2 pixelize(vec2 uv, float px) {
  vec2 size = u_res / px;
  return floor(uv * size) / size;
}

void main(){
  float px = 10.0 + 8.0 * (0.5 + 0.5 * sin(u_time * 0.8));
  vec2 uv = pixelize(v_uv, px);

  // Animated gradient with subtle noise-like shimmer
  float wave = 0.5 + 0.5 * sin(uv.x * 6.283 + u_time * 0.6) * cos(uv.y * 6.283 + u_time * 0.4);
  vec3 c1 = vec3(0.0);
  vec3 c2 = vec3(0.36, 0.88, 0.90); // sc-blue
  vec3 c3 = vec3(0.84, 0.69, 1.0);  // sc-violet-ish
  vec3 color = mix(mix(c1, c2, wave), c3, 0.25 * (0.5 + 0.5 * sin(u_time * 0.3)));

  gl_FragColor = vec4(color, 1.0);
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
      canvas.height = window.innerHeight; // full viewport
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
    <div className="relative w-full h-screen">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
};

export default ShaderReveal;