import React, { useEffect, useState } from 'react';

const LoaderOverlay: React.FC<{ onDone?: () => void }> = ({ onDone }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number;
    const step = () => {
      setProgress((p) => {
        const next = Math.min(100, p + Math.max(0.5, (100 - p) * 0.04));
        if (next >= 100) {
          cancelAnimationFrame(raf);
          setTimeout(() => onDone?.(), 150);
        }
        return next;
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90">
      <div className="text-center">
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint">SoulCloude</div>
        <div className="mt-6 w-64 h-[2px] bg-white/10 mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-3 text-sm text-gray-400">{Math.floor(progress)}%</div>
      </div>
    </div>
  );
};

export default LoaderOverlay;