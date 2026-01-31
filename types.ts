export enum CarCondition {
  NEW = 'Nouveau',
  USED = 'Occasion',
}

export enum Transmission {
  AUTOMATIC = 'Automatique',
  MANUAL = 'Manuelle',
}

export enum FuelType {
  PETROL = 'Essence',
  DIESEL = 'Diesel',
  HYBRID = 'Hybride',
  ELECTRIC = 'Électrique',
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  condition: CarCondition;
  transmission: Transmission;
  fuel: FuelType;
  image: string;
  gallery: string[];
  description: string;
  engine: string;
  color: string;
}

export type ViewState = 'HOME' | 'INVENTORY' | 'ABOUT' | 'CONTACT' | 'SELL_TRADE' | 'VEHICLE_DETAIL';
