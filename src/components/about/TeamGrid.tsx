import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const team = [
  { name: 'Ari Patel', role: 'Platform Lead', initials: 'AP' },
  { name: 'Sam Nguyen', role: 'Design Systems', initials: 'SN' },
  { name: 'Jordan Lee', role: 'Product Engineer', initials: 'JL' },
  { name: 'Casey Kim', role: 'DevOps & Infra', initials: 'CK' },
];

const TeamGrid: React.FC = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">The Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">SoulCloude is a community of builders. Here are a few of the folks behind the platform.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <Card key={m.name} className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className="bg-sc-blue/20 text-sc-blue font-semibold">{m.initials}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-lg font-semibold text-white">{m.name}</h3>
                <p className="text-sm text-gray-400">{m.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;