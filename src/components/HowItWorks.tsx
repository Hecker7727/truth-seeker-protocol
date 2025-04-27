
import React from 'react';
import { Upload, Search, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-sc-blue" />,
      title: "Upload your file",
      description: "Securely upload images, videos, or audio files for analysis."
    },
    {
      icon: <Search className="h-12 w-12 text-sc-violet" />,
      title: "We analyze it with deep AI techniques",
      description: "Our advanced AI systems scan for patterns and anomalies that indicate manipulation."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-sc-mint" />,
      title: "You get transparent results",
      description: "Receive detailed analysis showing where and how content may have been altered."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our process is simple, secure, and powered by cutting-edge AI technology.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:neon-border group"
            >
              <div className="mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">{step.title}</h3>
              <p className="text-gray-400 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
