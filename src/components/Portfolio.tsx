import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Network, Gamepad2, Bot } from 'lucide-react';

const products = [
  { icon: <Package className="h-8 w-8 text-sc-blue" />, name: 'DevToolX', tagline: 'Developer productivity toolkit', blurb: 'CLI, UI components, and DX automations to ship faster.' },
  { icon: <Network className="h-8 w-8 text-sc-violet" />, name: 'APIHub', tagline: 'Unified API marketplace', blurb: 'Discover, test, and monetize APIs with built-in billing.' },
  { icon: <Gamepad2 className="h-8 w-8 text-sc-mint" />, name: 'EduGame', tagline: 'Learn by building', blurb: 'Gamified learning paths for developers and makers.' },
  { icon: <Bot className="h-8 w-8 text-sc-blue" />, name: 'TaskAI', tagline: 'Automate ops with AI', blurb: 'Workflow agents that integrate with your stack.' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">SoulCloude Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A growing ecosystem of developer-built products under one brand.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Card key={p.name} className="glass-card border-0 hover:neon-border transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  {p.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                    <p className="text-sm text-sc-blue">{p.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-400">{p.blurb}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;