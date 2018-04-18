import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactsService } from './../../@core/data/contacts.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DialogNewContactComponent } from './dialog-new-contact/dialog-new-contact.component';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  headerActions = [
    { title: 'add', type: 'link', icon: 'fa fa-plus', clickAction: 'create', displayInMobile: true },
  ];

  contacts = [];

  lodgers = [];

  owners = [];

  serviceProviders = [];

  constructor(private contactsService: ContactsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.contactsService.getLodgers().subscribe(lodger => {
      this.lodgers.push(lodger);
    });
    this.contactsService.getOwners().subscribe(owner => {
      this.owners.push(owner);
    });
    this.contactsService.getServiceProviders().subscribe(serviceProvider => {
      this.serviceProviders.push(serviceProvider);
    });
    this.contactsService.newContactAdded.subscribe((contact: any) => {
      switch (contact.role) {
        case 'locataire':
          this.lodgers.push(contact);
          break;
        case 'propriétaire':
          this.owners.push(contact);
          break;
        case 'prestataire de service':
          this.serviceProviders.push(contact);
          break;
      }
    });
  }

  handleHeaderEvent(event) {
    this[event.action]();
  }

  create() {
    const modalRef = this.modalService.open(DialogNewContactComponent, { size: 'lg', container: 'nb-layout' });
  }

  edit(contact) {
    const modalRef = this.modalService.open(DialogNewContactComponent, { size: 'lg', container: 'nb-layout' });
    modalRef.componentInstance.contact = contact;
  }

}
