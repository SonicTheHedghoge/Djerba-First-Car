import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactez-<span className="text-red-600">Nous</span></h2>
        <p className="text-neutral-400">Une question ? Un projet ? Venez nous rencontrer au showroom ou écrivez-nous.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info & Map */}
        <div className="space-y-8">
            <div className="bg-neutral-800 p-8 rounded-2xl border border-white/5 space-y-6">
                <div className="flex items-start gap-4">
                    <div className="bg-red-600/20 p-3 rounded-lg text-red-500">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-1">Notre Adresse</h4>
                        <p className="text-neutral-400">{CONTACT_INFO.address}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-red-600/20 p-3 rounded-lg text-red-500">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-1">Téléphone</h4>
                        <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-neutral-400 hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-red-600/20 p-3 rounded-lg text-red-500">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-1">Email</h4>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-neutral-400 hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" className="flex-1 bg-[#1877F2] hover:bg-[#166fe5] py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-colors">
                    <Facebook size={20} /> Facebook
                </a>
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="flex-1 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-opacity">
                    <Instagram size={20} /> Instagram
                </a>
            </div>

            {/* Map Placeholder - Using an iframe for location simulation */}
            <div className="h-[300px] w-full rounded-2xl overflow-hidden border border-white/10 relative bg-neutral-800">
                 <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?q=Route%20Midoun%20Km%202%2C%20Djerba%2C%20Tunisia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    title="Djerba First Car Location"
                    className="filter grayscale invert contrast-125 opacity-70 hover:opacity-100 transition-opacity duration-500"
                ></iframe>
            </div>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-900 p-8 rounded-3xl border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message envoyé !'); }}>
                <div>
                    <label className="block text-sm text-neutral-400 mb-2">Nom Complet</label>
                    <input type="text" className="w-full bg-neutral-800 border border-white/10 rounded-lg py-4 px-4 text-white focus:border-red-600 focus:outline-none" placeholder="Votre nom" required />
                </div>
                <div>
                    <label className="block text-sm text-neutral-400 mb-2">Téléphone</label>
                    <input type="tel" className="w-full bg-neutral-800 border border-white/10 rounded-lg py-4 px-4 text-white focus:border-red-600 focus:outline-none" placeholder="Votre numéro" required />
                </div>
                <div>
                    <label className="block text-sm text-neutral-400 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-neutral-800 border border-white/10 rounded-lg py-4 px-4 text-white focus:border-red-600 focus:outline-none" placeholder="Comment pouvons-nous vous aider ?" required></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2">
                    ENVOYER LE MESSAGE <Send size={20} />
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
