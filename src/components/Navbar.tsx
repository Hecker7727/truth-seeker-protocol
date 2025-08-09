
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="font-poppins text-xl font-bold text-white">
                Soul<span className="text-sc-blue">Cloude</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/" className="text-sm font-medium text-white/90 hover:text-sc-blue">Home</Link>
              <Link to="/about" className="text-sm font-medium text-white/90 hover:text-sc-blue">About</Link>
              <Link to="/learn" className="text-sm font-medium text-white/90 hover:text-sc-blue">Learn</Link>
              <Link to="/trust" className="text-sm font-medium text-white/90 hover:text-sc-blue">Trust</Link>
              <Link to="/contact" className="text-sm font-medium text-white/90 hover:text-sc-blue">Contact</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon" className="text-white hover:text-sc-blue">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card m-2 rounded-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* same links as desktop */}
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-black/30 hover:text-sc-blue" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-black/30 hover:text-sc-blue" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/learn" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-black/30 hover:text-sc-blue" onClick={() => setIsMenuOpen(false)}>Learn</Link>
            <Link to="/trust" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-black/30 hover:text-sc-blue" onClick={() => setIsMenuOpen(false)}>Trust</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-black/30 hover:text-sc-blue" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
