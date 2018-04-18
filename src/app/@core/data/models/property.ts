import { Calendar } from 'ngx-calendar';
import { Equipement } from './equipement';
import { Location } from './location';
import  { Link } from './link';
import { Service } from './service';
import { Reservation } from './reservation';

export interface Property {
    id: number;
    title?: string;
    description?: string;
    images: any[];
    platforms?: string[];
    type: string;
    status: string;
    nbr_chambre: number;
    nbr_cuisine: number;
    nbr_salon: number;
    location: Location;
    calendars: Calendar[];
    equipements?: Equipement[];
    links?: Link[];
    services?: any[];
    reservations?: any[]; 
    rate?: number;
    votes?: number;
    amount?: number;
}