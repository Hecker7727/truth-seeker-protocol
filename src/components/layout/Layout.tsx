import React from 'react';
import PhysicsBackground from '@/components/PhysicsBackground';
import Particles from '@/components/Particles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-sc-dark text-white">
      <Particles />
      <PhysicsBackground />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;