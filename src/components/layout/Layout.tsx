import React, { Suspense, useEffect } from 'react';
import Particles from '@/components/Particles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lenis from 'lenis';
import { chooseBackground, isReducedMotion } from '@/lib/perf';

const ThreeBackground = React.lazy(() => import('@/components/ThreeBackground'));
const PhysicsBackground = React.lazy(() => import('@/components/PhysicsBackground'));

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (isReducedMotion()) return;
    const lenis = new Lenis({ duration: 1.1, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
    let rafId = requestAnimationFrame(function raf(time) { lenis.raf(time); rafId = requestAnimationFrame(raf); });
    const onVis = () => { if (document.hidden) lenis.stop(); else lenis.start(); };
    document.addEventListener('visibilitychange', onVis);
    return () => { cancelAnimationFrame(rafId); document.removeEventListener('visibilitychange', onVis); };
  }, []);

  const engine = typeof window !== 'undefined' ? chooseBackground() : 'none';

  return (
    <div className="min-h-screen bg-sc-dark text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-black focus:text-white focus:px-3 focus:py-1 rounded">Skip to content</a>
      {/* Top progress bar remains for preloads */}
      <div className="fixed top-0 left-0 right-0 z-[95] h-[2px] bg-white/5">
        <div data-sc-loader-bar className="h-full w-0 bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint transition-[width] duration-200" />
      </div>
      <Suspense fallback={null}>
        {engine === 'three' && <ThreeBackground />}
        {engine === 'matter' && <PhysicsBackground />}
      </Suspense>
      <Particles />
      <Navbar />
      <div id="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;