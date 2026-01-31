import React from 'react';
import { Car } from '../types';
import { Gauge, Calendar, Fuel, Zap } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-neutral-800 rounded-xl overflow-hidden border border-white/5 hover:border-red-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/10 cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
            car.condition === 'Nouveau' ? 'bg-amber-500 text-black' : 'bg-neutral-900/80 text-white backdrop-blur-md'
          }`}>
            {car.condition}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent opacity-80"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">{car.make} {car.model}</h3>
            <p className="text-neutral-400 text-sm line-clamp-1">{car.engine}</p>
        </div>

        <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
            <div className="flex items-center gap-2 text-neutral-300 text-sm">
                <Calendar size={14} className="text-red-500" />
                <span>{car.year}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300 text-sm">
                <Gauge size={14} className="text-red-500" />
                <span>{car.mileage.toLocaleString()} km</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300 text-sm">
                <Fuel size={14} className="text-red-500" />
                <span>{car.fuel}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300 text-sm">
                <Zap size={14} className="text-red-500" />
                <span>{car.transmission}</span>
            </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-2xl font-bold text-white">{car.price.toLocaleString()} TND</span>
            <button className="text-xs font-bold text-red-500 uppercase tracking-widest group-hover:underline underline-offset-4">
                Voir Détails
            </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
