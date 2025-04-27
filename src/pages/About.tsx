
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import MouseTrail from '@/components/MouseTrail';
import { Shield, Eye, Database, Check } from 'lucide-react';

const About = () => {
  const projectName = "TruthGuard"; // The child project name under Soulcloude
  
  const timeline = [
    {
      year: "2023",
      title: "Vision Born",
      description: "The rise of AI deepfakes inspired the Soulcloude mission."
    },
    {
      year: "2024",
      title: "TruthGuard Launch",
      description: "Our first project focused on AI detection launches."
    },
    {
      year: "2025",
      title: "Global Impact",
      description: "Expanding our reach to protect digital truth worldwide."
    }
  ];

  const principles = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Transparency",
      description: "We're open about how our technology works and its limitations."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Intelligence",
      description: "Our AI is continuously learning to stay ahead of manipulation techniques."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy",
      description: "Your data is yours. We process without permanent storage."
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "Accuracy",
      description: "We prioritize correct results over speed, avoiding false positives."
    }
  ];

  return (
    <div className="min-h-screen bg-sc-dark text-white overflow-x-hidden">
      <MouseTrail />
      <Particles />
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-12">
          {/* Hero Banner with Animation */}
          <div className="text-center mb-16">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint bg-clip-text text-transparent">
                  Soulcloude
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Presents
                <span className="text-sc-blue ml-2">{projectName}</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
              In a world blurred by AI, we stand for truth.
            </p>
          </div>
          
          {/* Timeline Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sc-blue/30 animate-pulse"></div>
              
              <div className="space-y-20">
                {timeline.map((item, index) => (
                  <div key={index} className="relative animate-slide-up opacity-0" style={{ animationDelay: `${1.2 + index * 0.3}s` }}>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card neon-border flex items-center justify-center text-sc-blue font-bold hover:scale-110 transition-transform">
                      {item.year}
                    </div>
                    
                    <div className={`glass-card p-6 w-5/6 sm:w-2/5 hover:scale-105 transition-transform ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <h3 className="text-xl font-semibold mb-2 text-sc-blue">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mission Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in opacity-0" style={{ animationDelay: '2.1s' }}>Our Mission</h2>
            <div className="glass-card p-8 neon-border-violet text-center mb-12 animate-scale-in opacity-0 hover:scale-105 transition-transform" style={{ animationDelay: '2.4s' }}>
              <p className="text-xl text-white">
                "Through {projectName}, we empower humans to verify truth in an age of synthetic media."
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 flex items-start gap-4 hover:scale-105 transition-transform animate-slide-up opacity-0" 
                  style={{ animationDelay: `${2.7 + index * 0.3}s` }}
                >
                  <div className="bg-black/40 p-3 rounded-full text-sc-blue animate-pulse">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                    <p className="text-gray-400">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
