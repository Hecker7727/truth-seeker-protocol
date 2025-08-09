import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const items = [
  { title: 'DevToolX', desc: 'Developer productivity toolkit' },
  { title: 'APIHub', desc: 'Unified API marketplace' },
  { title: 'EduGame', desc: 'Learn by building' },
  { title: 'TaskAI', desc: 'Automate ops with AI' },
];

const TiltCard: React.FC<{ title: string; desc: string; }> = ({ title, desc }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateX(${-(py * 6)}deg) rotateY(${px * 6}deg) translateZ(0)`;
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return; el.style.transform = 'rotateX(0) rotateY(0)';
  };
  return (
    <Card className="glass-card border-0 will-change-transform" onMouseMove={onMove} onMouseLeave={onLeave}>
      <CardContent ref={ref} className="p-6 transition-transform duration-150">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{desc}</p>
      </CardContent>
    </Card>
  );
};

const TiltCards: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Flagship Launches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => <TiltCard key={it.title} title={it.title} desc={it.desc} />)}
        </div>
      </div>
    </section>
  );
};

export default TiltCards;