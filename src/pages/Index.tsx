
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import WhySoulcloude from '@/components/WhySoulcloude';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import Portfolio from '@/components/Portfolio';
import PhysicsBackground from '@/components/PhysicsBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-sc-dark text-white">
      <Particles />
      <PhysicsBackground />
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <Portfolio />
        <WhySoulcloude />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
