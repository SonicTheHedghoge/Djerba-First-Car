import React from 'react';
import { Award, ShieldCheck, Users, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600 rounded-tl-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500 rounded-br-3xl opacity-20"></div>
            <img 
                src="https://images.unsplash.com/photo-1562519819-016930d757bb?q=80&w=1000&auto=format&fit=crop" 
                alt="Showroom Interior" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover h-[500px]"
            />
        </div>
        <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">L'Excellence Automobile à <span className="text-red-600">Djerba</span></h2>
            <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                Fondé avec une passion pour l'automobile de prestige, <strong className="text-white">Hakouti Motors</strong> est devenu la référence incontournable pour l'achat, la vente et l'échange de véhicules de qualité sur l'île de Djerba.
            </p>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                Notre mission est simple : offrir une expérience client transparente, honnête et premium. Que vous cherchiez votre première voiture ou un modèle de luxe exclusif, notre équipe d'experts est là pour vous guider à chaque étape.
            </p>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-4xl font-bold text-red-600">2.2K+</span>
                    <span className="text-sm text-neutral-400 uppercase tracking-wide">Abonnés</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-4xl font-bold text-amber-500">100%</span>
                    <span className="text-sm text-neutral-400 uppercase tracking-wide">Transparence</span>
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
            { icon: ShieldCheck, title: "Confiance", desc: "Tous nos véhicules sont rigoureusement inspectés." },
            { icon: Award, title: "Qualité", desc: "Une sélection des meilleures marques et modèles." },
            { icon: Users, title: "Expertise", desc: "Une équipe passionnée à votre écoute." },
            { icon: ThumbsUp, title: "Satisfaction", desc: "Un service après-vente réactif et dévoué." }
        ].map((item, idx) => (
            <div key={idx} className="bg-neutral-800/50 p-8 rounded-2xl border border-white/5 hover:bg-neutral-800 transition-colors group">
                <item.icon className="w-12 h-12 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400">{item.desc}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default About;