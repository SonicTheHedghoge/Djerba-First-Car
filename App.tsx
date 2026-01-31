import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import VehicleDetail from './components/VehicleDetail';
import About from './components/About';
import SellTrade from './components/SellTrade';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { ViewState, Car } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setCurrentView('VEHICLE_DETAIL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewChange = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white selection:bg-red-600 selection:text-white">
      <Navbar currentView={currentView} setView={handleViewChange} />

      <main>
        {currentView === 'HOME' && (
          <>
            <Hero setView={handleViewChange} />
            <div id="latest-stock">
                <Inventory onCarClick={handleCarClick} />
            </div>
            <div className="bg-black">
                <About />
            </div>
            <SellTrade />
            <Contact />
          </>
        )}

        {currentView === 'INVENTORY' && (
           <div className="pt-20">
             <Inventory onCarClick={handleCarClick} />
           </div>
        )}

        {currentView === 'VEHICLE_DETAIL' && selectedCar && (
          <VehicleDetail 
            car={selectedCar} 
            onBack={() => handleViewChange('INVENTORY')}
            onContact={() => handleViewChange('CONTACT')}
          />
        )}

        {currentView === 'ABOUT' && (
            <div className="pt-20">
                <About />
            </div>
        )}

        {currentView === 'SELL_TRADE' && (
            <div className="pt-20">
                <SellTrade />
            </div>
        )}

        {currentView === 'CONTACT' && (
            <div className="pt-20">
                <Contact />
            </div>
        )}
      </main>
      
      <AiAssistant />
      <Footer setView={handleViewChange} />
    </div>
  );
};

export default App;