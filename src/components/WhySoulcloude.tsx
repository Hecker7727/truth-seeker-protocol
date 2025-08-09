
import React from 'react';
import { Eye, ShieldCheck, Database, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const WhySoulcloude = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8 text-sc-blue animate-float" />,
      title: "No Solo Dev Struggle",
      description: "Plug into a ready team, design system, infra, and ship faster."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-sc-mint animate-float" />,
      title: "One Brand, Many Products",
      description: "Build under SoulCloude and leverage shared credibility and reach."
    },
    {
      icon: <Database className="h-8 w-8 text-sc-violet animate-float" />,
      title: "Community-Powered",
      description: "Contributors earn from real revenue. Reputation and impact matter."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-sc-blue animate-float" />,
      title: "Platform-as-a-Studio",
      description: "Structured playbooks, templates, and tooling — not chaos."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in">Why SoulCloude?</h2>
            <p className="text-xl text-sc-blue font-semibold mb-6 animate-fade-in">"One brand. Unlimited ideas. Infinite revenue streams."</p>
            <p className="text-gray-400 mb-8 animate-fade-in">
              SoulCloude is a developer-powered venture studio. Developers bring ideas; we help build, launch, and scale under a unified brand.
            </p>
            <div className="glass-card p-6 neon-border-violet transform hover:scale-105 transition-all duration-300">
              <p className="text-white italic">
                "The line between real and synthetic content grows thinner every day. 
                Our mission is to maintain clarity in an increasingly blurred world."
              </p>
            </div>
            <Button 
              asChild
              className="mt-8 bg-sc-blue hover:bg-sc-blue/80 text-black font-semibold animate-fade-in"
            >
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl flex flex-col items-center text-center 
                          transform hover:scale-105 transition-all duration-300 
                          hover:neon-border animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySoulcloude;
