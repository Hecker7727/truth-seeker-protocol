import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket } from 'lucide-react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sc-blue/90 bg-black/30 rounded-full px-3 py-1 glass-card">
          <Rocket className="h-3.5 w-3.5" /> Developer-powered venture studio
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint fade-in">
          Build together. Launch under one brand. Share the upside.
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
          SoulCloude is where developers turn ideas into products with a shared platform, playbooks, and community. One brand. Many products.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
          <Button asChild className="bg-sc-blue text-black hover:bg-sc-blue/80">
            <a href="/contact">Join as a Builder</a>
          </Button>
          <Button asChild variant="outline" className="border-sc-violet/50 text-sc-violet hover:bg-sc-violet/10">
            <a href="#pillars">Propose an Idea <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-sc-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-sc-violet/10 blur-3xl" />
    </section>
  );
};

export default AboutHero;