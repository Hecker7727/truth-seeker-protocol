
import React from 'react';
import { Eye, ShieldCheck, Database } from 'lucide-react';

const WhySoulcloude = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8 text-sc-blue" />,
      title: "AI Detection",
      description: "Powerful algorithms trained to identify AI-generated content with high accuracy."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-sc-mint" />,
      title: "Data Privacy",
      description: "Your uploaded files are processed securely with zero permanent storage."
    },
    {
      icon: <Database className="h-8 w-8 text-sc-violet" />,
      title: "Deepfake Exposure",
      description: "Specialized detection for synthetic media across images, video, and audio."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Soulcloude?</h2>
            <p className="text-xl text-sc-blue font-semibold mb-6">"Truth is fragile. Soulcloude protects it."</p>
            <p className="text-gray-400 mb-8">
              In an era where AI can create increasingly convincing fake content, 
              verifying authenticity becomes crucial. Soulcloude provides the tools 
              to distinguish between reality and synthetic media.
            </p>
            <div className="glass-card p-6 neon-border-violet">
              <p className="text-white italic">
                "The line between real and synthetic content grows thinner every day. 
                Our mission is to maintain clarity in an increasingly blurred world."
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl flex items-start gap-4 transition-all duration-300 hover:scale-105"
              >
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySoulcloude;
