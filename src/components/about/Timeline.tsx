import React from 'react';

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const items: TimelineItem[] = [
  { year: '2024', title: 'Founding', description: 'SoulCloude is formed as a developer-powered venture studio.' },
  { year: '2025', title: 'First Cohort', description: 'Launches include DevToolX, APIHub, and EduGame.' },
  { year: '2026', title: 'Ecosystem Growth', description: 'Expanding the portfolio with community-built products.' },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sc-blue/30" />
          <div className="space-y-16">
            {items.map((item, index) => (
              <div key={item.year} className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card neon-border flex items-center justify-center text-sc-blue font-bold">
                  {item.year}
                </div>
                <div className={`glass-card p-6 w-5/6 sm:w-2/5 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                  <h3 className="text-xl font-semibold mb-2 text-sc-blue">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;