import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-green-400">TREDDY</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-green-400 transition-colors">Início</a>
          <a href="#about" className="text-white hover:text-green-400 transition-colors">Sobre nós</a>
          <a href="#services" className="text-white hover:text-green-400 transition-colors">Serviços</a>
          <a href="#contact" className="text-white hover:text-green-400 transition-colors">Contato</a>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors">Contate-nos</a>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#" className="text-white hover:text-green-400 transition-colors">Início</a>
              <a href="#about" className="text-white hover:text-green-400 transition-colors">Sobre nós</a>
              <a href="#services" className="text-white hover:text-green-400 transition-colors">Serviços</a>
              <a href="#contact" className="text-white hover:text-green-400 transition-colors">Contato</a>
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors">Contate-nos</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
