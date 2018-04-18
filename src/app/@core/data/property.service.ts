import { Injectable } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { Subject } from 'rxjs/Subject';
import * as dateFns from 'date-fns';

import { Property } from './models/property';
import { Calendar } from 'ngx-calendar';
import { ServicesService } from './services.service';

import { LatLngBounds, LatLng } from 'leaflet';

@Injectable()
export class PropertyService {

  refresh: Subject<any> = new Subject();

  refreshCurrentProperty: Subject<any> = new Subject();

  refreshPropertyCalendars: Subject<any> = new Subject();

  local: Calendar = {
    id: 1,
    name: 'EasyLocatus',
    url: '',
    color: '#40DC7E',
    isLocal: true,
    display: true,
    events: []
  };

  holidaysInFrance: Calendar = {
    id: 2,
    name: 'Holidays in France',
    color: '#039be5',
    isLocal: false,
    url: 'https://calendar.google.com/calendar/ical/fr.french%23holiday%40group.v.calendar.google.com/public/basic.ics',
    display: true,
    events: []
  };

  public properties: Property[] = [
    {
      id: 1,
      title: 'Studio des Palmiers Baie Nettlé',
      images: [
        'assets/images/p1.jpg',
        'assets/images/p2.jpg',
        'assets/images/p3.jpg'
      ],
      status: 'réservé',
      type: 'Appartement',
      nbr_chambre: 3,
      nbr_cuisine: 1,
      nbr_salon: 2,
      platforms: ['Airbnb', 'Abritel'],
      location: {
        userLocation: {
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          address: 'Info Municipale, Chemin de Bretagne',
          longitude: 2.2582740783036575,
          latitude: 48.82377450294101,
          postcode: '92130',
          isValid: true
        },
        mapLocation: {
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          address: 'Info Municipale, Chemin de Bretagne',
          longitude: 2.2582740783036575,
          latitude: 48.82377450294101,
          postcode: '92130',
        },
        isMapAddress: false
      },
      equipements: [
        {
          name: 'Réfrigérateur'
        },
        {
          name: 'Congélateur'
        },
        {
          name: 'Four'
        },
        {
          name: 'Téléphone'
        },
        {
          name: 'Ordinateur'
        },
        {
          name: 'Armoire'
        },
        {
          name: 'Placard'
        }
      ],
      calendars: [
        {
          id: 2,
          name: 'Holidays in France',
          color: '#039be5',
          isLocal: false,
          url: 'https://calendar.google.com/calendar/ical/fr.french%23holiday%40group.v.calendar.google.com/public/basic.ics',
          display: true,
          events: []
        },
        {
          id: 1,
          name: 'EasyLocatus',
          url: '',
          color: '#40DC7E',
          isLocal: true,
          display: true,
          events: []
        }
      ],
      links: [
        {
          titre: 'Airbnb',
          url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
        },
        {
          titre: 'Abritel',
          url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
        }
      ],
      services: [
        {
          service: {
            title: 'Immobilier',
            slug: 'immobilier'
          },
          start: new Date(),
          end: new Date(),
          status: 'payé',
          amount: 500,
          paymentStatus: 'payé',
          provider: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 333 3333 33'
          },
          payements: [
            {
              amount: 500,
              status: 'payé',
              method: 'cash',
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
              status: 'non payé',
              method: 'check',
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
              method: 'credit card',
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
              method: 'debit card',
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
              method: 'money order',
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
              method: 'bank transfers',
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
              method: 'online payment service',
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
          service: {
            title: 'Immobilier',
            slug: 'immobilier'
          },
          start: new Date(),
          end: new Date(),
          status: 'payé',
          amount: 500,
          paymentStatus: 'payé',
          provider: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 333 3333 33'
          },
          payements: [
            {
              amount: 500,
              status: 'payé',
              method: 'cash',
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
              status: 'non payé',
              method: 'check',
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
              method: 'credit card',
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
              method: 'debit card',
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
              method: 'money order',
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
              method: 'bank transfers',
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
              method: 'online payment service',
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
          service: {
            title: 'Immobilier',
            slug: 'immobilier'
          },
          start: new Date(),
          end: new Date(),
          status: 'payé',
          amount: 500,
          paymentStatus: 'payé',
          provider: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 333 3333 33'
          },
          payements: [
            {
              amount: 500,
              status: 'payé',
              method: 'cash',
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
              status: 'non payé',
              method: 'check',
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
              method: 'credit card',
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
              method: 'debit card',
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
              method: 'money order',
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
              method: 'bank transfers',
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
              method: 'online payment service',
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
          service: {
            title: 'Immobilier',
            slug: 'immobilier'
          },
          start: new Date(),
          end: new Date(),
          status: 'payé',
          amount: 500,
          paymentStatus: 'payé',
          provider: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 333 3333 33'
          },
          payements: [
            {
              amount: 500,
              status: 'payé',
              method: 'cash',
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
              status: 'non payé',
              method: 'check',
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
              method: 'credit card',
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
              method: 'debit card',
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
              method: 'money order',
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
              method: 'bank transfers',
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
              method: 'online payment service',
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
          service: {
            title: 'Immobilier',
            slug: 'immobilier'
          },
          start: new Date(),
          end: new Date(),
          status: 'payé',
          amount: 500,
          paymentStatus: 'payé',
          provider: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 333 3333 33'
          },
          payements: [
            {
              amount: 500,
              status: 'payé',
              method: 'cash',
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
              status: 'non payé',
              method: 'check',
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
              method: 'credit card',
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
              method: 'debit card',
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
              method: 'money order',
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
              method: 'bank transfers',
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
              method: 'online payment service',
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
          service: {
            title: 'Immobilier',
            slug: 'immobilier'
          },
          start: new Date(),
          end: new Date(),
          status: 'payé',
          amount: 500,
          paymentStatus: 'payé',
          provider: {
            firstname: 'Jhon',
            lastname: 'Doe',
            email: '',
            phone: '+333 333 3333 33'
          },
          payements: [
            {
              amount: 500,
              status: 'payé',
              method: 'cash',
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
              status: 'non payé',
              method: 'check',
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
              method: 'credit card',
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
              method: 'debit card',
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
              method: 'money order',
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
              method: 'bank transfers',
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
              method: 'online payment service',
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
        }
      ],
      reservations: [
        {
          status: 'réservé',
          startDate: dateFns.addDays(new Date(), 1),
          endDate: dateFns.addDays(new Date(), 3),
          paymentStatus: 'payé',
          amount: 500,
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
              method: 'cash',
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
              status: 'non payé',
              method: 'check',
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
              method: 'credit card',
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
              method: 'debit card',
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
              method: 'money order',
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
              method: 'bank transfers',
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
              method: 'online payment service',
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
          status: 'provisoire',
          startDate: dateFns.addDays(new Date(), 1),
          endDate: dateFns.addDays(new Date(), 3),
          paymentStatus: 'non payé',
          amount: 800,
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
              method: 'cash',
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
              method: 'check',
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
              method: 'credit card',
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
              method: 'debit card',
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
              method: 'money order',
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
              method: 'bank transfers',
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
              method: 'online payment service',
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
          status: 'annulé',
          startDate: dateFns.addDays(new Date(), 1),
          endDate: dateFns.addDays(new Date(), 3),
          paymentStatus: 'payé',
          amount: 1500,
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
              mode: '',
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
          status: 'provisoire',
          startDate: dateFns.addDays(new Date(), 1),
          endDate: dateFns.addDays(new Date(), 3),
          paymentStatus: 'non payé',
          amount: 5500,
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
              mode: '',
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
          status: 'réservé',
          startDate: dateFns.addDays(new Date(), 1),
          endDate: dateFns.addDays(new Date(), 3),
          paymentStatus: 'non payé',
          amount: 600,
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
              mode: '',
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
          status: 'annulé',
          startDate: dateFns.addDays(new Date(), 1),
          endDate: dateFns.addDays(new Date(), 3),
          paymentStatus: 'payé',
          amount: 500,
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
              mode: '',
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
          status: 'annulé',
          startDate: dateFns.addDays(new Date(), 1),
          endDate: dateFns.addDays(new Date(), 3),
          paymentStatus: 'payé',
          amount: 300,
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
              mode: '',
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
        }
      ],
      rate: 5,
      votes: 26,
      amount: 85
    },
    {
      id: 2,
      title: 'Superbe duplex centre historique coeur de Bordeaux',
      status: 'disponible',
      images: [
        'assets/images/p2.jpg',
        'assets/images/p3.jpg',
        'assets/images/p4.jpg'
      ],
      type: 'Villa',
      nbr_chambre: 3,
      nbr_cuisine: 1,
      nbr_salon: 2,
      platforms: ['Airbnb'],
      location: {
        mapLocation: {
          longitude: 2.25743508352025,
          latitude: 48.82402879259719,
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          postcode: '92130',
          country: 'France',
          address: "KDS, Chemin de Bretagne",
        },
        userLocation: {
          address: "KDS, Chemin de Bretagne",
          longitude: 2.25743508352025,
          latitude: 48.82402879259719,
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          postcode: '92130',
          country: 'France',
          isValid: false
        },
        isMapAddress: true
      },
      equipements: [
        {
          name: 'Télévision'
        }
      ],
      calendars: [
        {
          id: 4,
          name: 'Holidays in France',
          color: '#039be5',
          isLocal: false,
          url: 'https://calendar.google.com/calendar/ical/fr.french%23holiday%40group.v.calendar.google.com/public/basic.ics',
          display: true,
          events: []
        },
        {
          id: 3,
          name: 'EasyLocatus',
          url: '',
          color: '#40DC7E',
          isLocal: true,
          display: true,
          events: []
        }
      ],
      services: [],
      reservations: [],
      links: [
        {
          titre: 'Airbnb',
          url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
        },
        {
          titre: 'Abritel',
          url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
        }
      ],
      rate: 3,
      votes: 7,
      amount: 60
    },
    {
      id: 3,
      title: 'Cosy Room Paris Center the Marais',
      images: [
        'assets/images/p5.jpg',
        'assets/images/p1.jpg',
        'assets/images/p2.jpg'
      ],
      status: 'disponible',
      type: 'Studio',
      nbr_chambre: 3,
      nbr_cuisine: 1,
      nbr_salon: 2,
      platforms: ['Abritel'],
      location: {
        mapLocation: {
          address: "Groupe Scolaire Robert Doisneau, Rue Jean-Jacques Rousseau",
          longitude: 2.258831978106173,
          latitude: 48.82294452044182,
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          postcode: '92130',
        },
        userLocation: {
          address: "Groupe Scolaire Robert Doisneau, Rue Jean-Jacques Rousseau",
          longitude: 2.258831978106173,
          latitude: 48.82294452044182,
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          postcode: '92130',
          isValid: true
        },
        isMapAddress: false
      },
      equipements: [
        {
          name: 'Télévision'
        }
      ],
      calendars: [
        this.local
      ],
      services: [],
      reservations: [],
      links: [{
        titre: 'Airbnb',
        url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
      },
      {
        titre: 'Abritel',
        url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
      }],
      rate: 4,
      votes: 70,
      amount: 90
    },
    {
      id: 4,
      title: 'MAISON SOUS LES TOITS - HAUT MARAIS',
      images: [
        'assets/images/p4.jpg',
        'assets/images/p5.jpg',
        'assets/images/p6.jpg'
      ],
      status: 'indisponible',
      type: 'Maison',
      nbr_chambre: 3,
      nbr_cuisine: 1,
      nbr_salon: 2,
      platforms: ['Airbnb'],
      location: {
        userLocation: {
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          address: 'École Le Petit Train Vert, Rue Eugène Atget',
          longitude: 2.2610828884353396,
          latitude: 48.8245832810708,
          postcode: '92130',
          isValid: true
        },
        mapLocation: {
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          address: 'École Le Petit Train Vert, Rue Eugène Atget',
          longitude: 2.2610828884353396,
          latitude: 48.8245832810708,
          postcode: '92130',
        },
        isMapAddress: false
      },
      equipements: [
        {
          name: 'Télévision'
        }
      ],
      calendars: [
        this.local
      ],
      services: [],
      reservations: [],
      links: [{
        titre: 'Airbnb',
        url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
      },
      {
        titre: 'Abritel',
        url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
      }],
      rate: 4,
      votes: 86,
      amount: 85
    },
    {
      id: 5,
      title: 'Villa de Charme Sud Landes 3ch',
      images: [

      ],
      status: 'indisponible',
      type: 'Villa',
      nbr_chambre: 3,
      nbr_cuisine: 1,
      nbr_salon: 2,
      platforms: ['Abritel', 'Airbnb'],
      location: {
        userLocation: {
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          address: 'A2B6G9, Place Jacques Madaule',
          longitude: 2.260222434997559,
          latitude: 48.82406340421708,
          postcode: '92130',
          isValid: true
        },
        mapLocation: {
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          address: 'A2B6G9, Place Jacques Madaule',
          longitude: 2.260222434997559,
          latitude: 48.82406340421708,
          postcode: '92130',
        },
        isMapAddress: false
      },
      equipements: [
        {
          name: 'Télévision'
        }
      ],
      calendars: [
        this.local
      ],
      services: [],
      reservations: [],
      links: [{
        titre: 'Airbnb',
        url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
      },
      {
        titre: 'Abritel',
        url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
      }],
      rate: 4,
      votes: 26,
      amount: 120
    },
    {
      id: 6,
      title: 'Amboise Troglodyte',
      images: [
        'assets/images/p6.jpg',
        'assets/images/p4.jpg',
        'assets/images/p3.jpg'
      ],
      status: 'réservé',
      type: 'Immeuble',
      nbr_chambre: 3,
      nbr_cuisine: 1,
      nbr_salon: 2,
      platforms: ['Abritel'],
      location: {
        userLocation: {
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          address: '37, Rue du Passeur de Boulogne',
          longitude: 2.259896278119413,
          latitude: 48.82543372005282,
          postcode: '92130',
          isValid: true
        },
        mapLocation: {
          country: 'France',
          city: 'Issy-les-Moulineaux',
          state: 'Ile-de-France',
          address: '37, Rue du Passeur de Boulogne',
          longitude: 2.259896278119413,
          latitude: 48.82543372005282,
          postcode: '92130',
        },
        isMapAddress: false
      },
      equipements: [
        {
          name: 'Télévision'
        }
      ],
      calendars: [
        this.local
      ],
      services: [],
      reservations: [],
      links: [{
        titre: 'Airbnb',
        url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
      },
      {
        titre: 'Abritel',
        url: 'https://www.airbnb.com/rooms/select/18575744?adults=2&s=Yys9hnmr'
      }],
      rate: 5,
      votes: 26,
      amount: 97
    }
  ];

  source: LocalDataSource = new LocalDataSource();

  public currentProperty: Property = this.properties[0];

  constructor(private servicesService: ServicesService) { }

  all() {
    this.source.load(this.properties);
    return this.source;
  }

  find(id: number): Property {
    return this.properties.filter(property => {
      return property.id === id;
    })[0];
  }

  setCurrentProperty(property: Property) {
    property.title !== 'All Properties' ? this.currentProperty = property : this.currentProperty = undefined;
    this.refreshCurrentProperty.next(this.currentProperty);
  }

  addCalendar(calendar: Calendar, property: Property) {
    property.calendars.push(calendar);
    this.refreshPropertyCalendars.next(property);
  }

  remove(property: Property) {
    this.properties = this.properties.filter(p => {
      return p.id !== property.id;
    });
    if ((this.currentProperty && this.currentProperty.id === property.id) || this.properties.length === 0) {
      this.currentProperty = null;
      this.refreshCurrentProperty.next(null);
    }
    this.refresh.next(this.properties);
  }

  add(property: Property) {
    this.properties.push(property);
    this.setCurrentProperty(property);
    this.refresh.next(this.properties);
  }

  getNearby(bounds: LatLngBounds, property: Property) {
    return this.properties.filter(p => {
      return bounds.contains(new LatLng(p.location.userLocation.latitude, p.location.userLocation.longitude)) && p.id !== property.id;
    });
  }

}
