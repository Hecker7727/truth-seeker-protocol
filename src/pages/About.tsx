
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import MouseTrail from '@/components/MouseTrail';
import PhysicsBackground from '@/components/PhysicsBackground';
import { Shield, Eye, Database, Check } from 'lucide-react';
import AboutHero from '@/components/about/AboutHero';
import Pillars from '@/components/about/Pillars';
import Timeline from '@/components/about/Timeline';
import TeamGrid from '@/components/about/TeamGrid';

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
      <PhysicsBackground />
      <Particles />
      <Navbar />
      <main className="pt-0">
        <AboutHero />
        <Pillars />
        <Timeline />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto mb-20">
            <div className="glass-card p-8 neon-border-violet text-left mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">What We Are</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li><span className="text-white font-semibold">Primary:</span> Venture Studio / Startup Studio</li>
                <li><span className="text-white font-semibold">Secondary:</span> Platform-as-a-Studio (PaaS)</li>
                <li><span className="text-white font-semibold">Ecosystem:</span> One brand, many products (DevToolX, APIHub, EduGame, TaskAI)</li>
                <li><span className="text-white font-semibold">Community:</span> Open contribution with revenue sharing</li>
              </ul>
            </div>
          </div>
        </div>
        <TeamGrid />
      </main>
    </div>
  );
};

export default About;
