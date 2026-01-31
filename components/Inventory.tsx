import React, { useState, useMemo } from 'react';
import { Car } from '../types';
import { CARS } from '../constants';
import CarCard from './CarCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface InventoryProps {
  onCarClick: (car: Car) => void;
}

const Inventory: React.FC<InventoryProps> = ({ onCarClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMake, setSelectedMake] = useState('All');
  const [maxPrice, setMaxPrice] = useState<number>(300000);
  const [showFilters, setShowFilters] = useState(false);

  const makes = useMemo(() => ['All', ...Array.from(new Set(CARS.map(c => c.make)))], []);

  const filteredCars = useMemo(() => {
    return CARS.filter(car => {
      const matchesSearch = 
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) || 
        car.model.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMake = selectedMake === 'All' || car.make === selectedMake;
      const matchesPrice = car.price <= maxPrice;
      
      return matchesSearch && matchesMake && matchesPrice;
    });
  }, [searchTerm, selectedMake, maxPrice]);

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre <span className="text-red-600">Stock</span></h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Explorez notre collection de véhicules d'exception, inspectés et garantis pour votre tranquillité d'esprit.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-10 bg-neutral-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-1/3">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500" size={20} />
                <input 
                    type="text" 
                    placeholder="Rechercher une marque, un modèle..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                />
            </div>

            {/* Mobile Filter Toggle */}
            <button 
              className="md:hidden flex items-center gap-2 text-white bg-neutral-700 px-4 py-2 rounded-lg"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={18} /> Filtres
            </button>

            {/* Desktop Filters / Expanded Mobile Filters */}
            <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 w-full md:w-auto items-center animate-in slide-in-from-top-2 md:animate-none`}>
                
                {/* Make Select */}
                <div className="flex flex-col gap-2 w-full md:w-auto">
                    <label className="text-xs text-neutral-400 uppercase tracking-wide">Marque</label>
                    <select 
                        value={selectedMake} 
                        onChange={(e) => setSelectedMake(e.target.value)}
                        className="bg-neutral-900 border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-red-600 cursor-pointer min-w-[150px]"
                    >
                        {makes.map(make => (
                            <option key={make} value={make}>{make}</option>
                        ))}
                    </select>
                </div>

                {/* Price Range */}
                <div className="flex flex-col gap-2 w-full md:w-auto min-w-[200px]">
                    <div className="flex justify-between text-xs text-neutral-400">
                        <span className="uppercase tracking-wide">Prix Max</span>
                        <span className="text-white font-bold">{maxPrice.toLocaleString()} TND</span>
                    </div>
                    <input 
                        type="range" 
                        min="50000" 
                        max="500000" 
                        step="10000" 
                        value={maxPrice} 
                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                        className="w-full accent-red-600 h-2 bg-neutral-900 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                 {/* Reset Button (Mobile Only visible when filters active, or if user filtered) */}
                 {(selectedMake !== 'All' || searchTerm !== '' || maxPrice < 500000) && (
                   <button 
                     onClick={() => {
                       setSelectedMake('All');
                       setSearchTerm('');
                       setMaxPrice(500000);
                     }}
                     className="p-2 text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
                     title="Réinitialiser"
                   >
                     <X size={20} />
                   </button>
                 )}
            </div>
        </div>
      </div>

      {/* Grid */}
      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} onClick={() => onCarClick(car)} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-neutral-800/20 rounded-2xl border border-white/5 border-dashed">
            <p className="text-xl text-neutral-400">Aucun véhicule ne correspond à vos critères.</p>
            <button 
                onClick={() => {
                   setSelectedMake('All');
                   setSearchTerm('');
                   setMaxPrice(500000);
                }}
                className="mt-4 text-red-500 hover:underline"
            >
                Réinitialiser les filtres
            </button>
        </div>
      )}
    </div>
  );
};

export default Inventory;
