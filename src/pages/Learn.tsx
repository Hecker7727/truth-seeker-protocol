
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import { BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Learn = () => {
  const { toast } = useToast();
  
  const articles = [
    { title: "How SoulCloude Works", excerpt: "Bring an idea, build with the platform, launch under one brand.", category: "Overview" },
    { title: "Revenue Sharing Guide", excerpt: "Understand contribution tracking and payouts.", category: "Economics" },
    { title: "Contribution Levels", excerpt: "Roles, expectations, and how to grow your impact.", category: "Community" },
    { title: "Studio Playbook", excerpt: "Product templates, design system, and review process.", category: "Playbook" },
    { title: "Legal & IP Basics", excerpt: "Ownership, licensing, and contributor agreements.", category: "Legal" },
    { title: "Launch Checklist", excerpt: "From MVP to public release with confidence.", category: "Go-to-market" },
  ];
  
  const handleArticleClick = () => {
    toast({
      title: "Coming Soon",
      description: "Full articles will be available in our next update.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-sc-dark text-white">
      <Particles />
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Learn to Build with SoulCloude</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Resources for contributors and founders building on the platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className="glass-card border-0 hover:neon-border-mint transition-all duration-300 cursor-pointer"
                onClick={handleArticleClick}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-5 w-5 text-sc-violet mr-2" />
                    <span className="text-sm text-sc-violet">{article.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{article.title}</h3>
                  <p className="text-gray-400 mb-4">{article.excerpt}</p>
                  <Button variant="link" className="px-0 text-sc-blue hover:text-sc-mint">
                    Read more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="glass-card p-8 text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Get the Playbook</h2>
            <p className="text-gray-300 mb-6">
              Our contributor playbook and templates are coming soon. Join the waitlist to get early access.
            </p>
            <Button 
              className="bg-sc-blue text-black hover:bg-sc-blue/80"
              onClick={() => {
                toast({
                  title: "Coming Soon",
                  description: "Playbook access will be available in our next update.",
                  duration: 3000,
                });
              }}
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
