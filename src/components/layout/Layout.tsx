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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    const r = requestAnimationFrame(raf);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => { cancelAnimationFrame(r); clearTimeout(timer); };
  }, []);

  return (
    <div className="min-h-screen bg-sc-dark text-white">
      {loading && <LoaderOverlay onDone={() => setLoading(false)} />}
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