import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const gradientFor = (path: string) => {
  if (path.startsWith('/learn')) return 'from-sc-violet to-black';
  if (path.startsWith('/trust')) return 'from-sc-mint to-black';
  if (path.startsWith('/contact')) return 'from-sc-blue to-black';
  if (path.startsWith('/about')) return 'from-white/10 to-black';
  return 'from-black to-black';
};

const TransitionNano: React.FC<{ routeKey: string }> = ({ routeKey }) => {
  const cells = useMemo(() => {
    const cols = 28;
    const rows = 16;
    return Array.from({ length: rows * cols }, (_, i) => ({ i, d: Math.random() * 400 }));
  }, [routeKey]);

  return (
    <motion.div
      key={routeKey}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[90] pointer-events-none"
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${gradientFor(routeKey)} opacity-90`} />
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(28, 1fr)`, gridTemplateRows: `repeat(16, 1fr)` }}>
        {cells.map(({ i, d }) => (
          <div key={i} className="relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10" style={{ animation: `nano 500ms ${Math.floor(d)}ms forwards cubic-bezier(.22,1,.36,1)` }} />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes nano { from { transform: scaleY(1); opacity: 1; } to { transform: scaleY(0); opacity: 0; } }
      `}</style>
    </motion.div>
  );
};

export default TransitionNano;