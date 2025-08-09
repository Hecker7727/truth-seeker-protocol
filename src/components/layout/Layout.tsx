import React, { useEffect, useState } from 'react';
import PhysicsBackground from '@/components/PhysicsBackground';
import Particles from '@/components/Particles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoaderOverlay from '@/components/LoaderOverlay';
import ThreeBackground from '@/components/ThreeBackground';
import Lenis from 'lenis';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t: number) => 1 - Math.pow(1 - t, 3), smoothWheel: true });
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    const r = requestAnimationFrame(raf);
    const timer = setTimeout(() => setLoading(false), 1200);

    const onProgress = (e: any) => {
      // If a route triggers preloading, briefly show loader at top (no block)
      const bar = document.querySelector('[data-sc-loader-bar]') as HTMLElement | null;
      if (bar) bar.style.width = `${Math.min(100, Math.max(0, e.detail?.pct ?? 0))}%`;
    };
    window.addEventListener('sc-loader-progress', onProgress as any);

    return () => { cancelAnimationFrame(r); clearTimeout(timer); window.removeEventListener('sc-loader-progress', onProgress as any); };
  }, []);

  return (
    <div className="min-h-screen bg-sc-dark text-white">
      {loading && <LoaderOverlay onDone={() => setLoading(false)} />}
      {/* Lightweight top progress bar for route preloads */}
      <div className="fixed top-0 left-0 right-0 z-[95] h-[2px] bg-white/5">
        <div data-sc-loader-bar className="h-full w-0 bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint transition-[width] duration-200" />
      </div>
      <ThreeBackground />
      <Particles />
      <PhysicsBackground />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;