import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Car Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-block px-4 py-1 mb-6 border border-red-500/50 rounded-full bg-red-900/20 backdrop-blur-sm">
            <span className="text-red-500 font-semibold tracking-wider uppercase text-sm">Le luxe automobile à Djerba</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Confiance. Qualité.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Premier Choix.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
            Découvrez notre sélection exclusive de véhicules premium. Hakouti Motors vous accompagne dans l'achat, la vente et l'échange de votre voiture avec une expertise incomparable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setView('INVENTORY')}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-red-900/30"
            >
              VOIR LES VOITURES
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => setView('CONTACT')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-lg font-bold transition-all"
            >
              CONTACTEZ-NOUS
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <ChevronDown size={24} />
      </div>
    </div>
  );
};

export default Hero;