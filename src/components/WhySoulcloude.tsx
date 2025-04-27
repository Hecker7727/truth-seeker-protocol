
import React from 'react';
import { Eye, ShieldCheck, Database, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const WhySoulcloude = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8 text-sc-blue animate-float" />,
      title: "AI Detection",
      description: "Our advanced algorithms detect AI-generated content with unparalleled accuracy."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-sc-mint animate-float" />,
      title: "Data Privacy",
      description: "Your security is our priority. Zero permanent storage, full transparency."
    },
    {
      icon: <Database className="h-8 w-8 text-sc-violet animate-float" />,
      title: "Deepfake Exposure",
      description: "Instantly identify synthetic media across images, video, and audio."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-sc-blue animate-float" />,
      title: "Future-Proof",
      description: "Continuously evolving algorithms to stay ahead of emerging AI threats."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in">Why Soulcloude?</h2>
            <p className="text-xl text-sc-blue font-semibold mb-6 animate-fade-in">"Truth is fragile. Soulcloude protects it."</p>
            <p className="text-gray-400 mb-8 animate-fade-in">
              In an era where AI can create increasingly convincing fake content, 
              verifying authenticity becomes crucial. We provide the tools and expertise 
              to distinguish between reality and synthetic media.
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
