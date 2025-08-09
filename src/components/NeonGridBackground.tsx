import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vsh = `
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fsh = `
  precision mediump float;
  varying vec2 vUv;
  uniform float u_time;
  uniform vec2 u_res;

  // Draw neon grid lines with anti-aliasing
  float gridLine(float v, float thickness){
    float fw = fwidth(v);
    return 1.0 - smoothstep(thickness - fw, thickness + fw, abs(v));
  }

  void main(){
    // Remap uv to aspect-correct space
    vec2 uv = vUv;
    float aspect = u_res.x / u_res.y;
    uv.x *= aspect;

    // Animate grid scroll
    float t = u_time * 0.15;
    vec2 p = uv * 12.0;
    p.x += t * 2.0;
    p.y += sin(t * 2.0) * 0.5;

    // Distance to nearest grid line in x/y
    vec2 g = fract(p) - 0.5;
    float lineX = gridLine(g.x, 0.03);
    float lineY = gridLine(g.y, 0.03);
    float lines = max(lineX, lineY);

    // Neon glow color cycling
    vec3 baseA = vec3(0.36, 0.88, 0.90); // sc-blue
    vec3 baseB = vec3(0.84, 0.69, 1.0);  // violet
    vec3 grad = mix(baseA, baseB, 0.5 + 0.5 * sin(u_time * 0.25 + uv.y * 2.0));

    // Background subtle gradient
    vec3 bg = mix(vec3(0.02), grad * 0.18, 0.6 + 0.4 * uv.y);

    // Glow: thicker soft lines
    float glow = gridLine(g.x, 0.08) + gridLine(g.y, 0.08);

    vec3 color = bg + grad * (lines * 0.9 + glow * 0.25);

    gl_FragColor = vec4(color, 1.0);
  }
`;

const NeonGridBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current!;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geo = new THREE.PlaneGeometry(2, 2);
    const mat = new THREE.ShaderMaterial({
      vertexShader: vsh,
      fragmentShader: fsh,
      uniforms: {
        u_time: { value: 0 },
        u_res: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      (mat.uniforms.u_res.value as THREE.Vector2).set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    const animate = () => {
      mat.uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      renderer.dispose();
      container.removeChild(renderer.domElement);
      geo.dispose();
      mat.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-20 pointer-events-none" />;
};

export default NeonGridBackground;