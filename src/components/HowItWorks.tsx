
import React from 'react';
import { Upload, Search, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-sc-blue" />,
      title: "Advanced Detection Technology",
      description: "State-of-the-art AI models trained to identify synthetic content."
    },
    {
      icon: <Search className="h-12 w-12 text-sc-violet" />,
      title: "Comprehensive Analysis",
      description: "Detailed examination of patterns and anomalies across multiple content types."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-sc-mint" />,
      title: "Real-time Protection",
      description: "Instant verification helping you stay ahead of digital deception."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Technology</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powered by cutting-edge AI and backed by continuous research to protect digital truth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl transition-all duration-500 
                        hover:scale-105 hover:neon-border group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-sc-blue transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
