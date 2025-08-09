import React from 'react';
import { motion } from 'framer-motion';

const TransitionCurtain: React.FC<{ routeKey: string }> = ({ routeKey }) => {
  return (
    <motion.div
      key={routeKey}
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: 'top' }}
      className="fixed inset-0 z-[90] bg-black"
    />
  );
};

export default TransitionCurtain;