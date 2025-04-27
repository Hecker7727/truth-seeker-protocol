
import React from 'react';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Soulcloude helped me verify the authenticity of content I encounter online. A must-have in today's digital world.",
      name: "Alex Johnson",
      title: "Digital Content Creator"
    },
    {
      quote: "The speed and accuracy of Soulcloude's detection is impressive. It's become an essential tool for our journalism team.",
      name: "Morgan Smith",
      title: "Investigative Journalist"
    },
    {
      quote: "This platform gives me peace of mind when reviewing media. The interface is intuitive and the results are reliable.",
      name: "Taylor Rivera",
      title: "Social Media Manager"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What People Are Saying</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Users from various industries trust Soulcloude to verify content authenticity.</p>
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
