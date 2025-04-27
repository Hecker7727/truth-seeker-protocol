
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  animationDuration: string;
  delay: string;
}

const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const colors = ['bg-sc-blue/30', 'bg-sc-violet/30', 'bg-sc-mint/30'];
    const generateParticles = () => {
      const particlesCount = window.innerWidth < 768 ? 15 : 30;
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < particlesCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (window.innerWidth < 768 ? 4 : 8) + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          animationDuration: `${Math.random() * 15 + 10}s`,
          delay: `-${Math.random() * 20}s`
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.color}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: particle.animationDuration,
            animationDelay: particle.delay
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
