
import React, { useEffect, useState } from 'react';

interface TrailDot {
  x: number;
  y: number;
  opacity: number;
}

const MouseTrail = () => {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const maxTrailLength = 20;

  useEffect(() => {
    const updateTrail = (e: MouseEvent) => {
      setTrail(prevTrail => {
        const newDot = {
          x: e.clientX,
          y: e.clientY,
          opacity: 1
        };
        
        const updatedTrail = [newDot, ...prevTrail]
          .slice(0, maxTrailLength)
          .map((dot, index) => ({
            ...dot,
            opacity: 1 - (index / maxTrailLength)
          }));
          
        return updatedTrail;
      });
    };

    window.addEventListener('mousemove', updateTrail);
    return () => window.removeEventListener('mousemove', updateTrail);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((dot, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-sc-blue"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: dot.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.2s ease-out'
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
