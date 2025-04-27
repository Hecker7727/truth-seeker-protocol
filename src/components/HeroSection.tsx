
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      {/* Hero content */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint">
          Soulcloude – Unmasking AI, One Pixel at a Time
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Analyze images, videos, and audio. Instantly uncover hidden manipulations with the power of AI.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-sc-blue to-sc-violet neon-glow text-lg font-medium text-black hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Link to="/detect">
              Try Detection Now
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-transparent border border-sc-violet/50 text-sc-violet text-lg font-medium hover:bg-sc-violet/10 hover:shadow-lg hover:scale-105 transition-all duration-300"
            onClick={() => {
              const howItWorksSection = document.getElementById('how-it-works');
              if (howItWorksSection) {
                howItWorksSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <a href="#how-it-works">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scanner animation */}
      <div className="mt-16 relative w-full max-w-md mx-auto glass-card p-4 overflow-hidden">
        <img 
          src="/placeholder.svg" 
          alt="Scanning demo"
          className="w-full h-auto rounded-lg object-cover"
        />
        <div className="scan-line"></div>
        <div className="absolute inset-0 rounded-lg border border-sc-blue/30 backdrop-blur-sm"></div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <a href="#how-it-works" className="text-sc-blue hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
