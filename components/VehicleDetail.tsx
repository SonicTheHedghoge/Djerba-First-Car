import React, { useState } from 'react';
import { Car } from '../types';
import { ArrowLeft, Check, Calendar, Gauge, Fuel, Zap, Settings, Tag, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface VehicleDetailProps {
  car: Car;
  onBack: () => void;
  onContact: () => void;
}

const VehicleDetail: React.FC<VehicleDetailProps> = ({ car, onBack, onContact }) => {
  const [activeImage, setActiveImage] = useState(car.image);

  return (
    <div className="pt-24 pb-20 container mx-auto px-6 animate-in fade-in zoom-in-95 duration-300">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors group"
      >
        <div className="p-2 bg-neutral-800 rounded-full group-hover:bg-red-600 transition-colors">
             <ArrowLeft size={20} className="text-white" />
        </div>
        <span className="font-medium">Retour au stock</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Gallery Section */}
        <div className="lg:col-span-8 space-y-4">
            <div className="w-full h-[400px] md:h-[500px] bg-neutral-800 rounded-2xl overflow-hidden shadow-2xl relative">
                <img 
                    src={activeImage} 
                    alt={car.model} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                <div 
                    onClick={() => setActiveImage(car.image)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === car.image ? 'border-red-600' : 'border-transparent'}`}
                >
                     <img src={car.image} className="w-full h-full object-cover hover:opacity-80 transition-opacity" alt="Main view" />
                </div>
                {car.gallery.map((img, idx) => (
                    <div 
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${activeImage === img ? 'border-red-600' : 'border-transparent'}`}
                    >
                        <img src={img} className="w-full h-full object-cover hover:opacity-80 transition-opacity" alt={`View ${idx}`} />
                    </div>
                ))}
            </div>
        </div>

        {/* Info Section */}
        <div className="lg:col-span-4 space-y-8">
            <div>
                <h1 className="text-4xl font-bold text-white mb-2">{car.make} {car.model}</h1>
                <p className="text-xl text-neutral-400 mb-6">{car.engine} - {car.year}</p>
                <div className="text-3xl font-bold text-red-500 mb-6">{car.price.toLocaleString()} TND</div>
                
                <div className="flex flex-col gap-3">
                    <button 
                        onClick={onContact}
                        className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
                    >
                        RÉSERVER UN ESSAI
                    </button>
                    <a 
                        href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                        className="w-full py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                    >
                        <Phone size={20} />
                        APPELER {CONTACT_INFO.phone}
                    </a>
                </div>
            </div>

            <div className="bg-neutral-800/50 rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Settings className="text-red-500" size={20} /> Caractéristiques
                </h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                    <div className="flex flex-col">
                        <span className="text-xs text-neutral-500 uppercase">Kilométrage</span>
                        <span className="text-white font-medium flex items-center gap-1"><Gauge size={14} />{car.mileage.toLocaleString()} km</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-neutral-500 uppercase">Année</span>
                        <span className="text-white font-medium flex items-center gap-1"><Calendar size={14} />{car.year}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-neutral-500 uppercase">Carburant</span>
                        <span className="text-white font-medium flex items-center gap-1"><Fuel size={14} />{car.fuel}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-neutral-500 uppercase">Boîte</span>
                        <span className="text-white font-medium flex items-center gap-1"><Zap size={14} />{car.transmission}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-neutral-500 uppercase">Couleur</span>
                        <span className="text-white font-medium flex items-center gap-1"><Tag size={14} />{car.color}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-neutral-500 uppercase">État</span>
                        <span className="text-white font-medium flex items-center gap-1"><Check size={14} />{car.condition}</span>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-800/50 rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4">Description</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                    {car.description}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
