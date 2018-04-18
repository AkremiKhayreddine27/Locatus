import { Injectable } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Property } from './models/property';

@Injectable()
export class ReservationsService {

    source: LocalDataSource = new LocalDataSource();

    getPropertyReservations(property: Property) {
        this.source.load(property.reservations);
        return this.source;
    }

}