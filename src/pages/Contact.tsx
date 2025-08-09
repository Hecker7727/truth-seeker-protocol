
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Mail, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "Thank you for contacting us. We'll respond shortly.",
      duration: 5000,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const faqs = [
    {
      question: "How do I propose an idea?",
      answer: "Share a concise problem, solution, and target user. We review for scope, viability, and portfolio fit."
    },
    {
      question: "How does revenue sharing work?",
      answer: "Revenue splits are based on contribution weight and role impact. Payouts are tracked and distributed monthly."
    },
    {
      question: "Do I need to form a company?",
      answer: "No. Products launch under the SoulCloude brand with contributor agreements that handle IP and payouts."
    },
    {
      question: "What skills are required?",
      answer: "Any builder roles are welcome: frontend, backend, devops, design, product, and go-to-market."
    }
  ];

  return (
    <div className="min-h-screen bg-sc-dark text-white">
      <Particles />
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions or feedback? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-sc-blue" /> Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black/40 border-gray-700 text-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black/40 border-gray-700 text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-black/40 border-gray-700 text-white h-32"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-sc-blue text-black hover:bg-sc-blue/80"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-sc-mint" /> Contact Info
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>Email: <a href="mailto:info@soulcloude.com" className="text-sc-blue hover:underline">info@soulcloude.com</a></p>
                  <p>Support: <a href="mailto:support@soulcloude.com" className="text-sc-blue hover:underline">support@soulcloude.com</a></p>
                  <p>Response time: Within 24 hours</p>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="text-sc-blue font-medium mb-2 flex items-start">
                        <ArrowRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        {faq.question}
                      </h4>
                      <p className="text-gray-400 ml-6">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
