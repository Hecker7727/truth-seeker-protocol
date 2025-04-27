
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import { Shield, Eye, Database, Check } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2023",
      title: "Concept Born",
      description: "The rise of AI deepfakes inspired the Soulcloude mission."
    },
    {
      year: "2024",
      title: "Team Assembled",
      description: "Experts in AI, cybersecurity, and design united."
    },
    {
      year: "2025",
      title: "Soulcloude Launches",
      description: "Truth scanning becomes accessible to everyone."
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
    <div className="min-h-screen bg-sc-dark text-white">
      <Particles />
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-12">
          {/* Hero Banner */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Born to Protect Reality</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In a world blurred by AI, Soulcloude stands for truth.
            </p>
          </div>
          
          {/* Our Story Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Story</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sc-blue/30"></div>
              
              {/* Timeline items */}
              <div className="space-y-20">
                {timeline.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Year circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card neon-border flex items-center justify-center text-sc-blue font-bold">
                      {item.year}
                    </div>
                    
                    {/* Content */}
                    <div className={`glass-card p-6 w-5/6 sm:w-2/5 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <h3 className="text-xl font-semibold mb-2 text-sc-blue">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Our Mission */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <div className="glass-card p-8 neon-border-violet text-center mb-12">
              <p className="text-xl text-white">
                "Our mission is simple: Empower humans to verify truth in an age of synthetic media."
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div key={index} className="glass-card p-6 flex items-start gap-4">
                  <div className="bg-black/40 p-3 rounded-full text-sc-blue">
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
