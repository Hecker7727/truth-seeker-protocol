
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 fade-in text-transparent bg-clip-text bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint">
          Soulcloude – Unmasking AI, One Pixel at a Time
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
          Analyze images, videos, and audio. Instantly uncover hidden manipulations with the power of AI.
        </p>
        
        <Button
          variant="outline"
          size="lg"
          className="bg-transparent border border-sc-violet/50 text-sc-violet text-lg font-medium hover:bg-sc-violet/10 hover:shadow-lg hover:scale-105 transition-all duration-300 slide-up opacity-0"
          style={{ animationDelay: '0.6s' }}
          onClick={() => {
            const howItWorksSection = document.getElementById('how-it-works');
            if (howItWorksSection) {
              howItWorksSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Learn More <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
        </Button>
      </div>
      
      <div className="absolute bottom-8 animate-bounce fade-in" style={{ animationDelay: '1s' }}>
        <a href="#how-it-works" className="text-sc-blue hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-sc-blue/20 rounded-full rotate-slow opacity-30" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-sc-violet/20 rounded-full rotate-slow opacity-30" style={{ animationDirection: 'reverse' }} />
    </div>
  );
};

export default HeroSection;
