import React from 'react';

const steps = [
  { h: 'Bring your idea', p: 'Start small. Be bold. No pitch decks required.' },
  { h: 'Build with the platform', p: 'Templates, infra, and design system — speed without chaos.' },
  { h: 'Launch under one brand', p: 'Portfolio momentum compounds your reach.' },
  { h: 'Share the revenue', p: 'Aligned incentives. Transparent attribution. Real upside.' },
];

const StickyNarrative: React.FC = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="lg:sticky lg:top-24 h-fit">
          <h2 className="text-4xl font-bold text-white leading-tight">A studio for the internet generation</h2>
          <p className="mt-3 text-gray-400">Where indie builders become a movement.</p>
        </div>
        <div className="space-y-8">
          {steps.map((s, i) => (
            <div key={s.h} className="glass-card p-6 hover:neon-border transition-all duration-300">
              <div className="text-sm text-sc-blue mb-1">Step {i+1}</div>
              <h3 className="text-2xl font-semibold text-white">{s.h}</h3>
              <p className="text-gray-400">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyNarrative;