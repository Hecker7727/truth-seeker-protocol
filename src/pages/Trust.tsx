
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
      <main className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sc-blue via-sc-violet to-sc-mint">Trust, Safety, and Fairness</h1>
            <p className="text-xl text-gray-300">Clear governance. Fair economics. Secure infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6 text-center">
              <ShieldCheck className="h-10 w-10 text-sc-mint mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-white">Contribution Transparency</h3>
              <p className="text-gray-400">Public logs, attribution, and decision histories.</p>
            </div>
            <div className="glass-card p-6 text-center">
              <FileText className="h-10 w-10 text-sc-violet mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-white">Clear Processes</h3>
              <p className="text-gray-400">Revenue share calculations and dispute resolution.</p>
            </div>
            <div className="glass-card p-6 text-center">
              <Lock className="h-10 w-10 text-sc-blue mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-white">Secure by Design</h3>
              <p className="text-gray-400">Least-privilege access, audits, minimized data.
              </p>
            </div>
          </div>

          {/* Keep the transparency list updated earlier */}
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
                  <strong className="text-white">Contribution transparency</strong> - Public contribution logs and attribution across roles.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-sc-blue/20 p-1 rounded-full mr-3 mt-1">
                  <ShieldCheck className="h-4 w-4 text-sc-blue" />
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Project documentation</strong> - Clear specs, roadmaps, decision logs, and review history.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-sc-blue/20 p-1 rounded-full mr-3 mt-1">
                  <ShieldCheck className="h-4 w-4 text-sc-blue" />
                </div>
                <p className="text-gray-300">
                  <strong className="text-white">Fair processes</strong> - Transparent revenue share calculations and dispute resolution.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trust;
