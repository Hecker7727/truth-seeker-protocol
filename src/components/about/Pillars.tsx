import React from 'react';
import { Users, Puzzle, HandCoins, Layers } from 'lucide-react';

const pillars = [
  { icon: <Users className="h-7 w-7 text-sc-blue" />, title: 'Community', desc: 'Open collaboration with visible contributions and recognition.' },
  { icon: <Layers className="h-7 w-7 text-sc-violet" />, title: 'Platform', desc: 'Design system, infra, and playbooks to reduce time-to-launch.' },
  { icon: <Puzzle className="h-7 w-7 text-sc-mint" />, title: 'Portfolio', desc: 'One brand, many products — shared credibility and reach.' },
  { icon: <HandCoins className="h-7 w-7 text-sc-blue" />, title: 'Ownership', desc: 'Fair revenue sharing aligned to measurable impact.' },
];

const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Our Pillars</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">The principles that make SoulCloude a platform-as-a-studio for builders.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div key={p.title} className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-1">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;