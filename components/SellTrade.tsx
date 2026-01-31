import React, { useState } from 'react';
import { Send, RefreshCw, DollarSign, Clock } from 'lucide-react';

const SellTrade: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    make: '',
    model: '',
    year: '',
    type: 'Vente' // Vente or Echange
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci ! Votre demande d'évaluation a été envoyée. Nous vous contacterons bientôt.");
  };

  return (
    <div className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Vendez ou Échangez votre <span className="text-red-600">Véhicule</span></h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Obtenez la meilleure offre pour votre voiture actuelle. Rapide, simple et au juste prix du marché.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Benefits */}
        <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-red-900/20 to-neutral-900 border border-red-500/20 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 blur-[60px] opacity-20"></div>
                <h3 className="text-2xl font-bold text-white mb-8">Pourquoi choisir Djerba First Car ?</h3>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center flex-shrink-0 text-red-500">
                            <DollarSign size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">Meilleur Prix Garanti</h4>
                            <p className="text-neutral-400 text-sm">Nous analysons le marché pour vous offrir une estimation juste et compétitive.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-500">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">Processus Rapide</h4>
                            <p className="text-neutral-400 text-sm">Estimation en 24h et paiement sécurisé immédiat.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-500">
                            <RefreshCw size={24} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white">Échange Facilité</h4>
                            <p className="text-neutral-400 text-sm">Utilisez la valeur de votre ancienne voiture comme apport pour votre nouvelle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-neutral-800 p-8 rounded-3xl border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Demander une estimation gratuite</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm text-neutral-400 mb-2">Type de demande</label>
                        <select 
                            name="type" 
                            value={formData.type} 
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-red-600 focus:outline-none"
                        >
                            <option value="Vente">Vendre ma voiture</option>
                            <option value="Echange">Échanger ma voiture</option>
                        </select>
                    </div>
                     <div>
                        <label className="block text-sm text-neutral-400 mb-2">Année</label>
                        <input 
                            type="number" 
                            name="year" 
                            placeholder="ex: 2019"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-red-600 focus:outline-none"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm text-neutral-400 mb-2">Marque</label>
                        <input 
                            type="text" 
                            name="make" 
                            placeholder="ex: BMW"
                            value={formData.make}
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-red-600 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-neutral-400 mb-2">Modèle</label>
                        <input 
                            type="text" 
                            name="model" 
                            placeholder="ex: Série 3"
                            value={formData.model}
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-red-600 focus:outline-none"
                            required
                        />
                    </div>
                </div>

                <div className="h-px bg-white/10 my-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <label className="block text-sm text-neutral-400 mb-2">Votre Nom</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Votre nom complet"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-red-600 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-neutral-400 mb-2">Téléphone</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="ex: 26 606 165"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border border-white/10 rounded-lg py-3 px-4 text-white focus:border-red-600 focus:outline-none"
                            required
                        />
                    </div>
                </div>

                <button 
                    type="submit"
                    className="w-full py-4 bg-white text-black hover:bg-neutral-200 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                >
                    ENVOYER LA DEMANDE <Send size={20} />
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default SellTrade;
