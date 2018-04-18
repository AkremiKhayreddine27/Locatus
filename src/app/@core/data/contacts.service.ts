import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';

let counter = 0;

@Injectable()
export class ContactsService {

    contacts = [
        {
            id: 1,
            firstname: 'Nick',
            lastname: 'Jones',
            role: 'locataire',
            phone: '0021675678675',
            location: {
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                address: 'Info Municipale, Chemin de Bretagne',
                longitude: 2.2582740783036575,
                latitude: 48.82377450294101,
                postcode: '92130',
                isValid: true
            },
            picture: 'assets/images/eva.png'
        },
        {
            id: 2,
            firstname: 'Eva',
            lastname: 'Moor',
            role: 'locataire',
            phone: '0021675678675',
            picture: 'assets/images/eva.png',
            location: {
                longitude: 2.25743508352025,
                latitude: 48.82402879259719,
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                postcode: '92130',
                country: 'France',
                address: "KDS, Chemin de Bretagne",
            }
        },
        {
            id: 3,
            firstname: 'Jack',
            lastname: 'Williams',
            role: 'locataire',
            phone: '0021675678675',
            location: {
                address: "Groupe Scolaire Robert Doisneau, Rue Jean-Jacques Rousseau",
                longitude: 2.258831978106173,
                latitude: 48.82294452044182,
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                postcode: '92130',
            },
            picture: 'assets/images/jack.png'
        },
        {
            id: 4,
            firstname: 'Nick',
            lastname: 'Jones',
            role: 'locataire',
            phone: '0021675678675',
            location: {
                address: "Groupe Scolaire Robert Doisneau, Rue Jean-Jacques Rousseau",
                longitude: 2.258831978106173,
                latitude: 48.82294452044182,
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                postcode: '92130',
            },
            picture: 'assets/images/nick.png'
        },
        {
            id: 5,
            firstname: 'Eva',
            lastname: 'Moor',
            role: 'locataire',
            phone: '0021675678675',
            location: {
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                address: 'École Le Petit Train Vert, Rue Eugène Atget',
                longitude: 2.2610828884353396,
                latitude: 48.8245832810708,
                postcode: '92130',
                isValid: true
            },
            picture: 'assets/images/eva.png'
        },
        {
            id: 6,
            firstname: 'Lee',
            lastname: 'Wong',
            role: 'propriétaire',
            phone: '0021675678675',
            location: {
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                address: 'A2B6G9, Place Jacques Madaule',
                longitude: 2.260222434997559,
                latitude: 48.82406340421708,
                postcode: '92130',
                isValid: true
            },
            picture: 'assets/images/lee.png'
        },
        {
            id: 7,
            firstname: 'Alan',
            lastname: 'Thompson',
            role: 'prestataire de service',
            phone: '0021675678675',
            location: {
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                address: '37, Rue du Passeur de Boulogne',
                longitude: 2.259896278119413,
                latitude: 48.82543372005282,
                postcode: '92130',
                isValid: true
            },
            picture: 'assets/images/alan.png'
        },
        {
            id: 8,
            firstname: 'Kate',
            lastname: 'Martinez',
            role: 'prestataire de service',
            phone: '0021675678675',
            location: {
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                address: '37, Rue du Passeur de Boulogne',
                longitude: 2.259896278119413,
                latitude: 48.82543372005282,
                postcode: '92130',
                isValid: true
            },
            picture: 'assets/images/kate.png'
        },
        {
            id: 9,
            firstname: 'Alan',
            lastname: 'Thompson',
            role: 'prestataire de service',
            phone: '0021675678675',
            location: {
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                address: '37, Rue du Passeur de Boulogne',
                longitude: 2.259896278119413,
                latitude: 48.82543372005282,
                postcode: '92130',
                isValid: true
            },
            picture: 'assets/images/alan.png'
        },
        {
            id: 10,
            firstname: 'Alan',
            lastname: 'Thompson',
            role: 'prestataire de service',
            phone: '0021675678675',
            location: {
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                address: '37, Rue du Passeur de Boulogne',
                longitude: 2.259896278119413,
                latitude: 48.82543372005282,
                postcode: '92130',
                isValid: true
            },
            picture: 'assets/images/alan.png'
        },
        {
            id: 11,
            firstname: 'Alan',
            lastname: 'Thompson',
            role: 'prestataire de service',
            phone: '0021675678675',
            location: {
                country: 'France',
                city: 'Issy-les-Moulineaux',
                state: 'Ile-de-France',
                address: '37, Rue du Passeur de Boulogne',
                longitude: 2.259896278119413,
                latitude: 48.82543372005282,
                postcode: '92130',
                isValid: true
            },
            picture: 'assets/images/alan.png'
        },
    ];

    contacts$ = Observable.from(this.contacts);

    newContactAdded = new Subject();

    constructor() {
        // this.userArray = Object.values(this.users);
    }

    all(): Observable<any> {
        return this.contacts$;
    }

    getLodgers() {
        return this.contacts$.filter(contact => {
            return contact.role === 'locataire';
        });
    }

    getOwners() {
        return this.contacts$.filter(contact => {
            return contact.role === 'propriétaire';
        });
    }

    getServiceProviders() {
        return this.contacts$.filter(contact => {
            return contact.role === 'prestataire de service';
        });
    }

    add(contact) {
        this.contacts.push(contact);
        this.newContactAdded.next(contact);
    }

    update(contact) {
        this.contacts.map(c => {
            if (contact.id === c.id) {
                c.firstname = contact.firstname;
                c.lastname = contact.lastname;
                c.phone = contact.phone;
                c.location = contact.location;
            }
        });
        this.newContactAdded.next(this.contacts$);
    }
}
