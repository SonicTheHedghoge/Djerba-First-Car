import { Car, CarCondition, FuelType, Transmission } from './types';

export const CARS: Car[] = [
  {
    id: '1',
    make: 'Mercedes-Benz',
    model: 'Classe A 200 AMG',
    year: 2023,
    price: 145000,
    mileage: 15000,
    condition: CarCondition.USED,
    transmission: Transmission.AUTOMATIC,
    fuel: FuelType.PETROL,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Une Mercedes Classe A finition AMG Line, alliant sportivité et élégance. Équipée des dernières technologies MBUX et d'un toit ouvrant panoramique.",
    engine: '1.3L Turbo 163ch',
    color: 'Gris Montagne'
  },
  {
    id: '2',
    make: 'Volkswagen',
    model: 'Golf 8 R-Line',
    year: 2022,
    price: 110000,
    mileage: 25000,
    condition: CarCondition.USED,
    transmission: Transmission.AUTOMATIC,
    fuel: FuelType.DIESEL,
    image: 'https://images.unsplash.com/photo-1621995147558-86c2e36b8e5c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621995147558-86c2e36b8e5c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop'
    ],
    description: "La référence des compactes en version R-Line. Design dynamique, confort de conduite exceptionnel et consommation réduite.",
    engine: '2.0 TDI 150ch',
    color: 'Blanc Pur'
  },
  {
    id: '3',
    make: 'Range Rover',
    model: 'Evoque R-Dynamic',
    year: 2024,
    price: 220000,
    mileage: 0,
    condition: CarCondition.NEW,
    transmission: Transmission.AUTOMATIC,
    fuel: FuelType.HYBRID,
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1679061093198-444737f2277d?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Le SUV urbain de luxe par excellence. Finition R-Dynamic SE avec intérieur cuir Windsor et système Pivi Pro.",
    engine: 'P300e Hybride Rechargeable',
    color: 'Noir Santorini'
  },
  {
    id: '4',
    make: 'BMW',
    model: 'Série 3 Pack M',
    year: 2021,
    price: 135000,
    mileage: 42000,
    condition: CarCondition.USED,
    transmission: Transmission.AUTOMATIC,
    fuel: FuelType.DIESEL,
    image: 'https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Plaisir de conduire absolu avec cette Série 3 Pack M. Châssis sport, direction précise et intérieur premium.",
    engine: '320d xDrive 190ch',
    color: 'Bleu Portimao'
  },
  {
    id: '5',
    make: 'Audi',
    model: 'RS3 Sportback',
    year: 2023,
    price: 280000,
    mileage: 5000,
    condition: CarCondition.USED,
    transmission: Transmission.AUTOMATIC,
    fuel: FuelType.PETROL,
    image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf819?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1614200179396-2bdb77ebf819?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603584173870-7b299f589389?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Une compacte ultra-sportive avec le légendaire moteur 5 cylindres. Performance et sonorité envoûtante.",
    engine: '2.5 TFSI 400ch',
    color: 'Vert Kyalami'
  },
  {
    id: '6',
    make: 'Peugeot',
    model: '3008 GT',
    year: 2022,
    price: 95000,
    mileage: 30000,
    condition: CarCondition.USED,
    transmission: Transmission.AUTOMATIC,
    fuel: FuelType.DIESEL,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Le SUV français le plus populaire. Finition GT haut de gamme avec i-Cockpit 3D et aides à la conduite avancées.",
    engine: 'BlueHDi 130ch',
    color: 'Bleu Célèbes'
  }
];

export const CONTACT_INFO = {
  address: "Route Midoun Km 2, Djerba, Tunisia, 4180",
  phone: "26 606 165",
  email: "djerbafirstcar@gmail.com",
  facebook: "https://facebook.com/djerbafirstcar",
  instagram: "https://instagram.com/djerbafirstcar"
};
