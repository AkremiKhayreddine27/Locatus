import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PropertyService } from '../../../../../@core/data/property.service';
import { ReservationsService } from '../../../../../@core/data/reservations.service';
import { Property } from '../../../../../@core/data/models/property';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public statuses: any[] = [
    { label: 'Status', value: 'Tous' },
    { label: 'réservé', value: 'réservé' },
    { label: 'provisoire', value: 'provisoire' },
    { label: 'annulé', value: 'annulé' }
  ];

  public payementStatus: any[] = [
    { label: 'Statut de payement', value: 'Tous' },
    { label: 'payé', value: 'payé' },
    { label: 'non payé', value: 'non payé' }
  ];

  defaultSelectPropertyMsg;

  properties = [];

  filters = [];

  currentProperty = this.propertyService.currentProperty ? this.propertyService.currentProperty : this.properties[0];

  source: LocalDataSource = new LocalDataSource();

  constructor(public reservationsService: ReservationsService, private propertyService: PropertyService) { }

  ngOnInit() {
    if (this.currentProperty) {
      this.source = this.reservationsService.getPropertyReservations(this.currentProperty);
    }else {
      this.defaultSelectPropertyMsg = 'Choisir un bien';
    }
    this.properties = this.propertyService.properties.map(property => {
      return { label: property.title, value: property.title };
    });
  }


  setCurrentProperty(propertyTitle) {
    const property = this.propertyService.properties.filter(p => {
      return p.title === propertyTitle.value;
    })[0];
    this.propertyService.setCurrentProperty(property);
  }

  setStatus(status) {
    const filter = {
      field: 'status',
      search: status.value !== 'Tous' ? status.value : ''
    };
    this.filters.push(filter);
    this.source.setFilter(this.filters, true);
  }

  setPaymentStatus(paymentStatus) {
    const filter = {
      field: 'paymentStatus',
      search: paymentStatus.value !== 'Tous' ? paymentStatus.value : '',
      filter: (cell: any, search: string) => {
        if (cell === search) {
          return true;
        } else {
          return false;
        }
      }
    };
    this.filters.push(filter);
    this.source.setFilter(this.filters, true);
  }

}
