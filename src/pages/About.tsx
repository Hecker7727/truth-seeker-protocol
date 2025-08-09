
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import MouseTrail from '@/components/MouseTrail';
import { Shield, Eye, Database, Check } from 'lucide-react';

const About = () => {
  const projectName = "SoulCloude";
  
  const timeline = [
    { year: "2024", title: "Founding", description: "SoulCloude is formed as a developer-powered venture studio." },
    { year: "2025", title: "First Cohort", description: "Launches include DevToolX, APIHub, and EduGame." },
    { year: "2026", title: "Ecosystem Growth", description: "Expanding the portfolio with community-built products." }
  ];

  const principles = [
    { icon: <Eye className="h-8 w-8" />, title: "Community", description: "Open collaboration where impact and contribution are visible." },
    { icon: <Database className="h-8 w-8" />, title: "Support", description: "Design, infra, and playbooks reduce time-to-launch." },
    { icon: <Shield className="h-8 w-8" />, title: "Transparency", description: "Clear contribution logs, revenue share, and governance." },
    { icon: <Check className="h-8 w-8" />, title: "Ownership", description: "Contributors earn based on value created; platform takes a fair share." }
  ];

  return (
    <div className="min-h-screen bg-sc-dark text-white overflow-x-hidden">
      <MouseTrail />
      <Particles />
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-12">
          <div className="text-center mb-16">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint bg-clip-text text-transparent">
                  {projectName}
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                A developer-powered venture studio
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
              One brand. Many products. Developers bring ideas; SoulCloude helps build, launch, and scale — with shared revenue for contributors.
            </p>
          </div>

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

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in opacity-0" style={{ animationDelay: '2.1s' }}>What We Are</h2>
            <div className="glass-card p-8 neon-border-violet text-left mb-12 animate-scale-in opacity-0 hover:scale-105 transition-transform" style={{ animationDelay: '2.4s' }}>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li><span className="text-white font-semibold">Primary:</span> Venture Studio / Startup Studio</li>
                <li><span className="text-white font-semibold">Secondary:</span> Platform-as-a-Studio (PaaS)</li>
                <li><span className="text-white font-semibold">Ecosystem:</span> One brand, many products (DevToolX, APIHub, EduGame, TaskAI)</li>
                <li><span className="text-white font-semibold">Community:</span> Open contribution with revenue sharing</li>
              </ul>
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
