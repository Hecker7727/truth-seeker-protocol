import React, { useEffect, useRef } from 'react';
import Matter, { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Composites, Body } from 'matter-js';

const PhysicsBackground: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Engine | null>(null);
  const renderRef = useRef<Render | null>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const engine = Engine.create();
    engineRef.current = engine;

    const render = Render.create({
      element: sceneRef.current as HTMLDivElement,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: window.devicePixelRatio || 1,
      },
    });
    renderRef.current = render;

    // Static boundaries
    const thickness = 80;
    const walls = [
      Bodies.rectangle(width / 2, height + thickness / 2, width, thickness, { isStatic: true }), // bottom
      Bodies.rectangle(width / 2, -thickness / 2, width, thickness, { isStatic: true }), // top
      Bodies.rectangle(-thickness / 2, height / 2, thickness, height, { isStatic: true }), // left
      Bodies.rectangle(width + thickness / 2, height / 2, thickness, height, { isStatic: true }), // right
    ];

    // Create stacks of circles with random colors and restitution
    const colors = ['#5CE1E6', '#D6B1FF', '#A5FFD6'];
    const stack = Composites.stack(50, 0, 8, 4, 14, 14, (x, y) => {
      const radius = 8 + Math.random() * 14;
      const c = colors[Math.floor(Math.random() * colors.length)];
      return Bodies.circle(x, y, radius, {
        restitution: 0.9,
        friction: 0.001,
        render: { fillStyle: c, strokeStyle: 'rgba(255,255,255,0.1)', lineWidth: 1 },
      });
    });

    World.add(engine.world, [...walls, stack]);

    // Gentle gravity sway
    let t = 0;
    const sway = () => {
      t += 0.005;
      engine.gravity.x = Math.sin(t) * 0.2;
      engine.gravity.y = 1 + Math.cos(t * 0.5) * 0.1;
      // apply slight wind force
      stack.bodies.forEach((b: Body, i: number) => {
        const force = 0.00002 * (1 + (i % 5));
        Matter.Body.applyForce(b, b.position, { x: force, y: -force * 0.2 });
      });
      requestAnimationFrame(sway);
    };
    sway();

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Remove mouse constraint for perf
    // const mouse = Mouse.create(render.canvas);
    // const mouseConstraint = MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.2, render: { visible: false } } });
    // World.add(engine.world, mouseConstraint);
    // keep the mouse in sync with rendering
    // (render as any).mouse = mouse;

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      render.canvas.width = w * (window.devicePixelRatio || 1);
      render.canvas.height = h * (window.devicePixelRatio || 1);
      render.options.width = w;
      render.options.height = h;
      render.canvas.style.width = `${w}px`;
      render.canvas.style.height = `${h}px`;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
      (render.canvas as any) = null;
      (render.context as any) = null;
      (render.textures as any) = {};
    };
  }, []);

  return (
    <div ref={sceneRef} className="fixed inset-0 -z-10 pointer-events-none" />
  );
};

export default PhysicsBackground;