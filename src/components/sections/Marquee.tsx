import React from 'react';

const items = [
  'One brand', 'Unlimited ideas', 'Community-built', 'Revenue sharing', 'Platform-as-a-Studio', 'Launch weekly', 'No solo dev struggle',
];

const Marquee: React.FC = () => {
  return (
    <section className="py-6 select-none overflow-hidden">
      <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-2xl font-semibold opacity-80">
        {Array(3).fill(0).map((_, i) => (
          <span key={i} className="mr-8">
            {items.map((t) => (
              <span key={t+i} className="mx-4 text-transparent bg-clip-text bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint">{t}</span>
            ))}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
};

export default Marquee;