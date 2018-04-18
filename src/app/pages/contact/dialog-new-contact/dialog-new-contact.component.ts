import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from '../../../@core/data/contacts.service';

@Component({
  selector: 'dialog-new-contact',
  templateUrl: './dialog-new-contact.component.html',
  styleUrls: ['./dialog-new-contact.component.scss']
})
export class DialogNewContactComponent implements OnInit {

  @Input() contact;

  newContact;

  submitted = false;

  types = [
    { label: 'Locataire', value: 'locataire' },
    { label: 'Propriétaire', value: 'propriétaire' },
    { label: 'Prestataire de service', value: 'prestataire de service' }
  ];

  constructor(public activeModal: NgbActiveModal, private contactsService: ContactsService) { }

  ngOnInit() {
    if (!this.contact) {
      this.newContact = {
        firstname: '',
        lastname: '',
        phone: '',
        role: 'locataire',
        picture: '',
        location: {
          address: '',
          postcode: '',
          city: '',
          state: '',
          country: ''
        }
      };
    } else {
      this.newContact = { ...this.contact };
    }
  }

  setType(type) {
    this.newContact.role = type.value;
  }

  close() {
    this.activeModal.dismiss();
  }

  save() {
    this.submitted = true;
    if (this.contact) {
      this.contactsService.update(this.newContact);
    } else {
      this.contactsService.add(this.newContact);
    }
    this.close();
  }

}
