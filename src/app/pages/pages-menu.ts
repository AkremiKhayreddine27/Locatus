import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Tableau de bord',
    icon: 'nb-grid-a-outline',
    link: '/pages/under-construction',
    home: true,
  },
  {
    title: 'Biens',
    icon: 'nb-home',
    link: '/pages/properties',
  },
  {
    title: 'Tarifs',
    icon: 'ion-ios-pricetag-outline',
    link: '/pages/tariff',
  },
  {
    title: 'Réservations',
    icon: 'lnr lnr-clock',
    link: '/pages/reservations',
  },
  {
    title: 'Calendriers',
    icon: 'lnr lnr-calendar-full',
    link: '/pages/under-construction'
  },
  { 
    title: 'Services',
    icon: 'nb-gear',
    link: '/pages/services',
  }, 
  {
    title: 'Finances',
    icon: 'nb-bar-chart',
    link: '/pages/under-construction',
  },
  {
    title: 'Contacts',
    icon: 'ion-ios-people-outline',
    link: '/pages/contacts',
  }
];
