import { Injectable } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subject } from 'rxjs/Subject';
import * as dateFns from 'date-fns';
import { PropertyService } from './property.service';

@Injectable()
export class SmartTableService {

  refresh: Subject<any> = new Subject();

  data = [
    {
      property: this.propertyService.all()[0],
      status: 'confirmed',
      startDate: dateFns.addDays(new Date(), 1),
      endDate: dateFns.addDays(new Date(), 3),
      lodger: {
        firstname: 'Nils',
        lastname: 'Richey',
        phone: '+33 555 666 888',
        email: 'khayreddine@gmail.com',
        nbrAdultes: 5
      },
      payements: [
        {
          amount: 500,
          status: 'payé',
          type: 'caution',
          date: new Date(),
          payer: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 444 555 555'
          }
        },
        {
          amount: 500,
          status: 'payé',
          type: 'caution',
          date: new Date(),
          payer: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 444 555 555'
          }
        },
        {
          amount: 500,
          status: 'payé',
          type: 'caution',
          date: new Date(),
          payer: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 444 555 555'
          }
        },
        {
          amount: 500,
          status: 'payé',
          type: 'caution',
          date: new Date(),
          payer: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 444 555 555'
          }
        },
        {
          amount: 500,
          status: 'payé',
          type: 'caution',
          date: new Date(),
          payer: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 444 555 555'
          }
        }
      ]
    },
    {
      property: this.propertyService.all()[1],
      status: 'provisional',
      amount: 500,
      startDate: dateFns.addDays(new Date(), 4),
      endDate: dateFns.addDays(new Date(), 8),
      lodger: {
        firstname: 'Jhon',
        lastname: 'Doe',
        phone: '+33 555 666 888',
        email: 'jhon@gmail.com',
        nbrAdultes: 5
      },
      payements: [
        {
          amount: 500,
          status: 'payé',
          type: 'caution',
          date: new Date(),
          payer: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 444 555 555'
          }
        }
      ]
    },
    {
      property: this.propertyService.all()[2],
      status: 'canceled',
      amount: 500,
      startDate: dateFns.addDays(new Date(), 9),
      endDate: dateFns.addDays(new Date(), 19),
      lodger: {
        firstname: 'Jane',
        lastname: 'Doe',
        phone: '+33 222 666 888',
        email: 'jane@gmail.com',
        nbrAdultes: 5
      },
      payements: [
        {
          amount: 500,
          status: 'payé',
          type: 'caution',
          date: new Date(),
          payer: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 444 555 555'
          }
        }
      ]
    },
    {
      property: this.propertyService.all()[3],
      status: 'completed',
      amount: 500,
      startDate: dateFns.addDays(new Date(), 20),
      endDate: dateFns.addDays(new Date(), 23),
      lodger: {
        firstname: 'Richard',
        lastname: 'coulon',
        email: 'akremi@gmail.com',
        phone: '+33 444 666 888',
        nbrAdultes: 5
      },
      payements: [
        {
          amount: 500,
          status: 'payé',
          type: 'caution',
          date: new Date(),
          payer: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 444 555 555'
          }
        }
      ]
    },
    {
      property: this.propertyService.all()[4],
      status: 'completed',
      amount: 500,
      startDate: dateFns.addDays(new Date(), 25),
      endDate: dateFns.addDays(new Date(), 29),
      lodger: {
        firstname: 'Linda',
        lastname: 'Keung',
        email: 'linda@gmail.com',
        phone: '+33 444 666 888',
        nbrAdultes: 5
      },
      payements: [
        {
          amount: 500,
          status: 'payé',
          type: 'caution',
          date: new Date(),
          payer: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 444 555 555'
          }
        }
      ]
    },
    {
      property: this.propertyService.all()[5],
      status: 'provisional',
      amount: 500,
      startDate: dateFns.addDays(new Date(), 29),
      endDate: dateFns.addDays(new Date(), 32),
      lodger: {
        firstname: 'Donna',
        lastname: 'Dovala',
        email: 'donna@gmail.com',
        phone: '+33 444 666 888',
        nbrAdultes: 5
      },
      payements: [
        {
          amount: 500,
          status: 'payé',
          type: 'caution',
          date: new Date(),
          payer: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 444 555 555'
          }
        }
      ]
    },
  ];

  source: LocalDataSource = new LocalDataSource();

  constructor(private propertyService: PropertyService) {}

  getData(): LocalDataSource {
    this.source.load(this.data);
    return this.source;
  }

  add(data: any) {
    this.source.add(data);
    this.refresh.next(this.source);
  }
}
