import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Car, MapPin, Search } from 'lucide-react';
import { ViewState } from '../types';
import { CONTACT_INFO } from '../constants';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
  }`;

  const linkClass = (view: ViewState) => `cursor-pointer font-medium text-sm tracking-wide transition-colors duration-200 hover:text-red-500 ${
    currentView === view ? 'text-red-500' : 'text-white'
  }`;

  const mobileLinkClass = (view: ViewState) => `block w-full text-left py-3 px-4 rounded-lg transition-colors ${
    currentView === view ? 'bg-red-600/10 text-red-500' : 'text-white hover:bg-white/5'
  }`;

  const handleNav = (view: ViewState) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNav('HOME')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
             <Car className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tighter text-white">DJERBA<span className="text-red-600">FIRST</span>CAR</h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNav('HOME')} className={linkClass('HOME')}>ACCUEIL</button>
          <button onClick={() => handleNav('INVENTORY')} className={linkClass('INVENTORY')}>NOS VÉHICULES</button>
          <button onClick={() => handleNav('SELL_TRADE')} className={linkClass('SELL_TRADE')}>VENDRE / ÉCHANGE</button>
          <button onClick={() => handleNav('ABOUT')} className={linkClass('ABOUT')}>À PROPOS</button>
          <button onClick={() => handleNav('CONTACT')} className={linkClass('CONTACT')}>CONTACT</button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-white hover:text-red-500 transition-colors">
                <Phone size={18} />
                <span className="font-semibold">{CONTACT_INFO.phone}</span>
            </a>
            <button 
                onClick={() => handleNav('INVENTORY')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
            >
                STOCK
            </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 border-t border-white/10 shadow-2xl p-4 flex flex-col gap-2 md:hidden animate-in slide-in-from-top-2 duration-200">
           <button onClick={() => handleNav('HOME')} className={mobileLinkClass('HOME')}>ACCUEIL</button>
           <button onClick={() => handleNav('INVENTORY')} className={mobileLinkClass('INVENTORY')}>NOS VÉHICULES</button>
           <button onClick={() => handleNav('SELL_TRADE')} className={mobileLinkClass('SELL_TRADE')}>VENDRE / ÉCHANGE</button>
           <button onClick={() => handleNav('ABOUT')} className={mobileLinkClass('ABOUT')}>À PROPOS</button>
           <button onClick={() => handleNav('CONTACT')} className={mobileLinkClass('CONTACT')}>CONTACT</button>
           <div className="h-px bg-white/10 my-2"></div>
           <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
            className="flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg font-bold"
           >
             <Phone size={20} />
             APPELER MAINTENANT
           </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
