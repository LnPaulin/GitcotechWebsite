import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">Gitcotech</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#services" className="text-white/90 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">Contact</a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-white/90 hover:text-white transition-colors py-2">Home</a>
              <a href="#services" className="text-white/90 hover:text-white transition-colors py-2">Services</a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors py-2">About</a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;