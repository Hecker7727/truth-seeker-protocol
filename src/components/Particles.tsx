
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  animationDuration: string;
  delay: string;
  opacity: number;
}

const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const colors = ['bg-sc-blue/30', 'bg-sc-violet/30', 'bg-sc-mint/30'];
    const generateParticles = () => {
      const particlesCount = isMobile ? 15 : 30;
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < particlesCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (isMobile ? 3 : 6) + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          animationDuration: `${Math.random() * 15 + 10}s`,
          delay: `-${Math.random() * 20}s`,
          opacity: Math.random() * 0.3 + 0.1
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
  }, [isMobile]);
  
  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.color} floating`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: particle.animationDuration,
            animationDelay: particle.delay,
            opacity: particle.opacity
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
