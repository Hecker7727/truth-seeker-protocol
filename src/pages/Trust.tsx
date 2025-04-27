
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import { ShieldCheck, Lock, FileText, Server } from 'lucide-react';

const Trust = () => {
  return (
    <div className="min-h-screen bg-sc-dark text-white">
      <Particles />
      <Navbar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Your Trust Is Sacred</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soulcloude protects your privacy with zero-retention detection.
            </p>
          </div>
          
          <div className="mb-16">
            <div className="glass-card p-8 mb-12">
              <div className="flex items-start gap-6">
                <ShieldCheck className="h-10 w-10 text-sc-mint flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Privacy Commitment</h2>
                  <p className="text-gray-300 mb-6">
                    At Soulcloude, we believe privacy is a fundamental right. Our detection technology is designed with privacy as a core principle, not an afterthought.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2 text-sc-blue">No Permanent Storage</h3>
                      <p className="text-gray-400">
                        Uploaded files are processed in memory and immediately discarded after analysis unless you explicitly opt to save them.
                      </p>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2 text-sc-blue">End-to-End Encryption</h3>
                      <p className="text-gray-400">
                        Your data is encrypted during transit and processing, ensuring it remains protected throughout analysis.
                      </p>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2 text-sc-blue">Minimal Data Collection</h3>
                      <p className="text-gray-400">
                        We only collect what's necessary to provide our service, nothing more.
                      </p>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2 text-sc-blue">User Control</h3>
                      <p className="text-gray-400">
                        You maintain full control over your data with clear options to delete analysis history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">How We Keep You Safe</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 flex flex-col items-center text-center">
                  <Lock className="h-10 w-10 text-sc-blue mb-4" />
                  <h3 className="text-lg font-medium mb-2">Secure Infrastructure</h3>
                  <p className="text-gray-400">
                    Our systems are built on industry-leading security practices with regular audits and updates.
                  </p>
                </div>
                <div className="glass-card p-6 flex flex-col items-center text-center">
                  <FileText className="h-10 w-10 text-sc-violet mb-4" />
                  <h3 className="text-lg font-medium mb-2">Transparent Reporting</h3>
                  <p className="text-gray-400">
                    We provide clear, understandable results about how our detection works and what it found.
                  </p>
                </div>
                <div className="glass-card p-6 flex flex-col items-center text-center">
                  <Server className="h-10 w-10 text-sc-mint mb-4" />
                  <h3 className="text-lg font-medium mb-2">Local Processing</h3>
                  <p className="text-gray-400">
                    Where possible, we process on-device to minimize data transmission and enhance privacy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6">Our Transparency Promise</h2>
              <p className="text-gray-300 mb-6">
                We're committed to being open about how our technology works, its capabilities, and its limitations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-sc-blue/20 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-sc-blue" />
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white">Regular accuracy reports</strong> - We publish metrics about our detection accuracy across different media types.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-sc-blue/20 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-sc-blue" />
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white">Model documentation</strong> - We explain how our AI detection works and what signals it looks for.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-sc-blue/20 p-1 rounded-full mr-3 mt-1">
                    <ShieldCheck className="h-4 w-4 text-sc-blue" />
                  </div>
                  <p className="text-gray-300">
                    <strong className="text-white">Clear limitations</strong> - We're honest about what our technology can and cannot detect.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trust;
