import React from 'react';
import { Car, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { ViewState } from '../types';

interface FooterProps {
    setView: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                        <Car className="text-white w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold tracking-tighter text-white">DJERBA<span className="text-red-600">FIRST</span>CAR</h2>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    Votre partenaire de confiance pour l'achat et la vente de véhicules premium à Djerba. Qualité, transparence et expertise.
                </p>
                <div className="flex gap-4">
                    {/* Social Icons Placeholder */}
                    <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                        <span className="font-bold">F</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                        <span className="font-bold">I</span>
                    </div>
                </div>
            </div>

            {/* Links */}
            <div>
                <h3 className="text-white font-bold mb-6">Navigation Rapide</h3>
                <ul className="space-y-4 text-neutral-400 text-sm">
                    <li><button onClick={() => setView('HOME')} className="hover:text-red-500 transition-colors">Accueil</button></li>
                    <li><button onClick={() => setView('INVENTORY')} className="hover:text-red-500 transition-colors">Nos Véhicules</button></li>
                    <li><button onClick={() => setView('SELL_TRADE')} className="hover:text-red-500 transition-colors">Vendre / Échange</button></li>
                    <li><button onClick={() => setView('ABOUT')} className="hover:text-red-500 transition-colors">À Propos</button></li>
                    <li><button onClick={() => setView('CONTACT')} className="hover:text-red-500 transition-colors">Contact</button></li>
                </ul>
            </div>

            {/* Hours */}
            <div>
                <h3 className="text-white font-bold mb-6">Horaires d'ouverture</h3>
                <ul className="space-y-4 text-neutral-400 text-sm">
                    <li className="flex justify-between"><span>Lundi - Samedi</span> <span className="text-white">08:00 - 19:00</span></li>
                    <li className="flex justify-between"><span>Dimanche</span> <span className="text-red-500">Sur rendez-vous</span></li>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h3 className="text-white font-bold mb-6">Contact</h3>
                <ul className="space-y-4 text-neutral-400 text-sm">
                    <li className="flex gap-3 items-start">
                        <MapPin size={18} className="text-red-600 flex-shrink-0 mt-1" />
                        <span>{CONTACT_INFO.address}</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <Phone size={18} className="text-red-600 flex-shrink-0" />
                        <span>{CONTACT_INFO.phone}</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <Mail size={18} className="text-red-600 flex-shrink-0" />
                        <span>{CONTACT_INFO.email}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Djerba First Car. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
