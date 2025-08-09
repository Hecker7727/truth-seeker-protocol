
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
import DramaticHero from '@/components/hero/DramaticHero';
import Marquee from '@/components/sections/Marquee';
import TiltCards from '@/components/sections/TiltCards';
import StickyNarrative from '@/components/sections/StickyNarrative';
import ShaderReveal from '@/components/ShaderReveal';

const Index = () => {
  return (
    <main>
      <DramaticHero />
      <ShaderReveal />
      <Marquee />
      <HowItWorks />
      <StickyNarrative />
      <TiltCards />
      <Portfolio />
      <WhySoulcloude />
      <Testimonials />
    </main>
  );
};

export default Index;
