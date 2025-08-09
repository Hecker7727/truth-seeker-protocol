
import React from 'react';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I shipped my idea as a real product in weeks. SoulCloude gave me a team, brand, and launch playbook.",
      name: "Alex Johnson",
      title: "Indie Developer"
    },
    {
      quote: "The shared design system and infra saved months. Revenue share makes contributions feel meaningful.",
      name: "Morgan Smith",
      title: "Full-stack Engineer"
    },
    {
      quote: "I didn’t want to form a company just for one app. SoulCloude let me build and release without the overhead.",
      name: "Taylor Rivera",
      title: "Product Engineer"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What People Are Saying</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Developers and builders launch faster with SoulCloude's platform-as-a-studio model.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-0 group hover:neon-border-mint transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  {/* Quote icons */}
                  <svg className="h-8 w-8 text-sc-mint/40" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v6a6 6 0 01-6 6H2v4c0 3.314 2.686 6 6 6h4c3.314 0 6-2.686 6-6v-4-6a6 6 0 00-6-6h-2zm20 0v6a6 6 0 01-6 6h-2v4c0 3.314 2.686 6 6 6h4c3.314 0 6-2.686 6-6v-4-6a6 6 0 00-6-6h-2z" />
                  </svg>
                </div>
                <p className="text-white mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="ml-0">
                    <p className="text-sm font-semibold text-sc-mint group-hover:text-sc-blue transition-colors">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-sc-blue mb-4">Trusted by organizations worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Placeholder for trusted logos */}
            <div className="h-8 w-24 bg-white/10 rounded"></div>
            <div className="h-8 w-24 bg-white/10 rounded"></div>
            <div className="h-8 w-24 bg-white/10 rounded"></div>
            <div className="h-8 w-24 bg-white/10 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
