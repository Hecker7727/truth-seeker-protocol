import React from 'react';
import { motion } from 'framer-motion';

const colorFor = (path: string) => {
  if (path.startsWith('/learn')) return 'bg-gradient-to-b from-sc-violet to-black';
  if (path.startsWith('/trust')) return 'bg-gradient-to-b from-sc-mint to-black';
  if (path.startsWith('/contact')) return 'bg-gradient-to-b from-sc-blue to-black';
  if (path.startsWith('/about')) return 'bg-gradient-to-b from-white/10 to-black';
  return 'bg-black';
};

const TransitionCurtain: React.FC<{ routeKey: string }> = ({ routeKey }) => {
  return (
    <motion.div
      key={routeKey}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: 'top' }}
      className={`fixed inset-0 z-[90] ${colorFor(routeKey)}`}
    />
  );
};

export default TransitionCurtain;