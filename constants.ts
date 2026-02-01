import { Car, CarCondition, FuelType, Transmission } from './types';

export const CARS: Car[] = [
  {
    id: '1',
    make: 'Mercedes-Benz',
    model: 'CLA 250e Kit AMG',
    year: 2023,
    price: 185000,
    mileage: 12000,
    condition: CarCondition.USED,
    transmission: Transmission.AUTOMATIC,
    fuel: FuelType.HYBRID,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Mercedes-Benz CLA 250e Hybride Rechargeable avec Kit AMG complet. Une élégance sportive et une efficacité redoutable.",
    engine: '1.3L EQ Power 218ch',
    color: 'Gris Montagne Magno'
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'GLC 300e 4MATIC',
    year: 2024,
    price: 320000,
    mileage: 5000,
    condition: CarCondition.USED,
    transmission: Transmission.AUTOMATIC,
    fuel: FuelType.HYBRID,
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553440637-d22ed8247ce6?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Le SUV premium de référence. GLC 300e 4MATIC alliant confort absolu et technologie hybride de pointe. État proche du neuf.",
    engine: '2.0L PHEV 320ch',
    color: 'Noir Obsidienne'
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
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Une Mercedes Classe A finition AMG Line, alliant sportivité et élégance.",
    engine: '1.3L Turbo 163ch',
    color: 'Gris Montagne'
  }
];

export const CONTACT_INFO = {
  address: "Houmt Souk, Djerba, Tunisia",
  phone: "22 183 422",
  email: "jamelhakouti@hotmail.fr",
  facebook: "https://facebook.com/HakoutiMotorsDjerba",
  instagram: "https://instagram.com/"
};