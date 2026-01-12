'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Logo from './medical_logo.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact us', path: '/contact' }
  ];

  const handleNavigation = (path) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  const handleTalkToUs = () => {
    router.push('/contact');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900/50 backdrop-blur-md border-b border-teal-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          {/* <Logo /> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 bg-transparent border-none cursor-pointer text-base"
              >
                {item.name}
              </button>
            ))}
            <div className="hidden lg:block">
              <button 
                onClick={handleTalkToUs}
                className="bg-gradient-to-r from-teal-400 to-cyan-400 hover:to-cyan-400 hover:from-teal-400 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Talk to Us
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-teal-400 bg-transparent border-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-teal-500/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 py-2 text-left bg-transparent border-none"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={handleTalkToUs}
                className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 shadow-lg w-full"
              >
                Talk to Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;