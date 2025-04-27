
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import WhySoulcloude from '@/components/WhySoulcloude';
import LiveDemo from '@/components/LiveDemo';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

const Index = () => {
  return (
    <div className="min-h-screen bg-sc-dark text-white">
      <Particles />
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhySoulcloude />
        <LiveDemo />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
