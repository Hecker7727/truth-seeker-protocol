
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
    {
      title: "What are Deepfakes?",
      excerpt: "Understanding the technology behind synthetic media and how it's evolving.",
      category: "Fundamentals"
    },
    {
      title: "How AI Alters Reality",
      excerpt: "Exploring the methods AI uses to generate and manipulate digital content.",
      category: "Technology"
    },
    {
      title: "Recognizing Synthetic Voices",
      excerpt: "Learn the telltale signs of AI-generated audio and speech patterns.",
      category: "Detection"
    },
    {
      title: "Common Tells of AI-Generated Content",
      excerpt: "Key indicators that can help identify artificially created media.",
      category: "Tips"
    },
    {
      title: "History of Digital Hoaxes",
      excerpt: "From photoshop to deepfakes: the evolution of digital manipulation.",
      category: "History"
    },
    {
      title: "The Future of Truth Verification",
      excerpt: "How technology is adapting to combat increasingly sophisticated fake content.",
      category: "Future"
    }
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
            <h1 className="text-4xl font-bold mb-6">Knowledge Protects You</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn how AI manipulation works and how to detect it.
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
            <h2 className="text-2xl font-semibold mb-4">Can You Spot the Deepfake?</h2>
            <p className="text-gray-300 mb-6">
              Test your skills with our interactive quiz. Sharpen your ability to identify artificially generated content.
            </p>
            <Button 
              className="bg-sc-blue text-black hover:bg-sc-blue/80"
              onClick={() => {
                toast({
                  title: "Coming Soon",
                  description: "Interactive quiz will be available in our next update.",
                  duration: 3000,
                });
              }}
            >
              Try the Quiz
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
