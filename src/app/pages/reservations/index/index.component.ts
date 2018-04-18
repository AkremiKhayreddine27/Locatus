import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { DialogNewReservationComponent } from '../dialog-new-reservation/dialog-new-reservation.component';
import { PropertyService } from '../../../@core/data/property.service';
import { ReservationsService } from '../../../@core/data/reservations.service';
import { Property } from '../../../@core/data/models/property';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isSearching = false;

  isFilterCollapsed = true;

  headerActions = [
    { title: 'search', type: 'link', icon: 'fa fa-search', clickAction: 'search', displayInMobile: true },
    { title: 'filter', type: 'link', icon: 'fa fa-filter', clickAction: 'filter', displayInMobile: false },
    {
      title: 'sort', type: 'dropdown', icon: 'fa fa-sort', displayInMobile: false, dropdownItems: [
        {
          title: 'Status',
          action: 'sort',
          value: 'status',
          direction: 'asc',
        },
        {
          title: 'Montant',
          action: 'sort',
          value: 'amount',
          direction: 'asc',
        },
        {
          title: 'Date',
          action: 'sort',
          value: 'startDate',
          direction: 'asc',
        },
      ]
    },
    { title: 'add', type: 'link', icon: 'fa fa-plus', clickAction: 'create', displayInMobile: false },
    { title: 'display', type: 'link', icon: 'nb-grid-a', displayInMobile: false },
    {
      title: 'settings', type: 'dropdown', icon: 'fa fa-ellipsis-h', dropdownItems: [
        {
          title: 'Import',
          action: 'settings',
          icon: 'fa fa-upload',
        },
        {
          title: 'Export',
          action: 'settings',
          icon: 'fa fa-download',
        }
      ], displayInMobile: false
    }
  ];

  currentProperty = this.propertyService.currentProperty;

  data: any = [];

  source: LocalDataSource = new LocalDataSource();

  searchFields = ['status', 'lodger.firstname', 'lodger.lastname'];


  constructor(private modalService: NgbModal, private reservationsService: ReservationsService, public propertyService: PropertyService) { }

  ngOnInit() {
    if (this.currentProperty !== null) {
      this.source = this.reservationsService.getPropertyReservations(this.currentProperty);
    }
    this.source.setFilter([]);
    this.source.onChanged().subscribe(value => {
      this.data = [];
      value.elements.map((reservation) => {
        this.data.push(reservation);
      });
    });
    this.propertyService.refreshCurrentProperty.subscribe(property => {
      if (property !== null) {
        this.currentProperty = property;
        this.source.load(this.currentProperty.reservations);
      } else {
        this.source.load([]);
      }
    });
  }

  handleHeaderEvent(event) {
    this[event.action]();
  }

  handleDropdownEvent(event) {
    this[event.item.action](event.item);
  }

  sort(element) {
    element.direction = element.direction === 'asc' ? 'desc' : 'asc';
    this.source.setSort([
      {
        field: element.value,
        direction: element.direction
      }
    ]);
  }

  search() {
    this.isSearching = !this.isSearching;
    this.isFilterCollapsed = true;
  }

  filter() {
    this.isFilterCollapsed = !this.isFilterCollapsed;
    this.isSearching = false;
  }

  openDialog(action) {
    this[action]();
  }

  import() {
    console.log('import');
  }

  create() {
    const modalRef = this.modalService.open(DialogNewReservationComponent, { size: 'lg', container: 'nb-layout' });
  }

}
