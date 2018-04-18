import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import * as dateFns from 'date-fns';
import { LocalDataSource } from 'ng2-smart-table';
import { ServicesService } from '../../../@core/data/services.service';
import { PropertyService } from '../../../@core/data/property.service';
import { Property } from '../../../@core/data/models/property';
import { DialogNewServiceComponent } from '../dialog-new-service/dialog-new-service.component';
@Component({
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {


  headerActions = [
    { title: 'search', type: 'link', icon: 'fa fa-search', clickAction: 'search', displayInMobile: true },
    { title: 'filter', type: 'link', icon: 'fa fa-filter', clickAction: 'filter', displayInMobile: false },
    {
      title: 'sort', type: 'dropdown', icon: 'fa fa-sort', dropdownItems: [
        {
          title: 'Type'
        },
        {
          title: 'Statut'
        },
        {
          title: 'Platform'
        }
      ], displayInMobile: false
    },
    { title: 'add', type: 'link', icon: 'fa fa-plus', clickAction: 'add', displayInMobile: false },
    { title: 'display', type: 'link', icon: 'nb-grid-a', displayInMobile: false },
    {
      title: 'settings', type: 'dropdown', icon: 'fa fa-ellipsis-h', dropdownItems: [
        {
          title: 'Import',
          icon: 'fa fa-upload'
        },
        {
          title: 'Export',
          icon: 'fa fa-download'
        }
      ], displayInMobile: false
    }
  ];

  mobileHeaderActions = [
    { title: 'filter', type: 'link', icon: 'fa fa-filter', clickAction: 'filterClicked' },
    { title: 'sort', type: 'dropdown', icon: 'fa fa-sort' },
    { title: 'add', type: 'link', icon: 'fa fa-plus', clickAction: 'addClicked' },
    { title: 'display', type: 'link', icon: 'nb-grid-a' },
    { title: 'settings', type: 'dropdown', icon: 'fa fa-ellipsis-h', dropdownItems: [] }
  ];

  isFilterCollapsed = true;

  isSearching = false;

  isGrid = false;

  refreshSubscription: Subscription;

  public statuses: any[] = [
    { text: 'All', value: '' },
    { text: 'provisional', value: 'provisional' },
    { text: 'canceled', value: 'canceled' },
    { text: 'confirmed', value: 'confirmed' },
    { text: 'completed', value: 'completed' }
  ];

  currentStatusFilter = this.statuses[0];

  public payementStatus: string[] = [
    'payé',
    'rembourser',
    'annulé',
  ];

  data: any = [];

  source: LocalDataSource = new LocalDataSource();

  constructor(private servicesService: ServicesService, private route: ActivatedRoute ,private modalService: NgbModal, public propertyService: PropertyService) { }

  ngOnInit() {
    const slug = this.route.snapshot.params.service;
    if(this.propertyService.currentProperty) {
      const services = this.servicesService.getPropertyServices(this.propertyService.currentProperty, slug);
      this.source.load(services);
    }
    this.source.onChanged().subscribe(value => {
      this.data = [];
      value.elements.map((service) => {
          service.property = {};
          service.property.title = this.propertyService.currentProperty.title;
          this.data.push(service);
      });
    });
    this.propertyService.refresh.subscribe(value => {
      this.source.refresh();
      this.source.getElements().then(data => {
        this.data = data;
      });
    });
    this.propertyService.refreshCurrentProperty.subscribe(property => {
      if(property) {
        const services = this.servicesService.getPropertyServices(this.propertyService.currentProperty, slug);
        this.source.load(services);
      }
    });
  }

  handleHeaderEvent(event) {
    this[event.action]();
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
    const modalRef = this.modalService.open(DialogNewServiceComponent, { size: 'lg', container: 'nb-layout' });
  }

  onSearch(query: string = '') {
    if (query !== '') {
      this.source.setFilter([
        {
          field: 'property',
          search: query
        },
        {
          field: 'startDate',
          search: query
        },
        {
          field: 'endDate',
          search: query
        },
        {
          field: 'lodger',
          search: query,
          filter: (cell: any, search: string) => {
            if (cell.firstname.toLowerCase().indexOf(search) !== -1 ||
              cell.lastname.toLowerCase().indexOf(search) !== -1 ||
              cell.email.toLowerCase().indexOf(search) !== -1 ||
              cell.phone.toLowerCase().indexOf(search) !== -1) {
              return true;
            } else {
              return false;
            }
          }
        },
        {
          field: 'status',
          search: this.currentStatusFilter === '' ? this.currentStatusFilter : query,
          filter: (cell: any, search: string) => {
            if (cell.indexOf(search) !== -1) {
              return true;
            } else {
              return false;
            }
          }
        }
      ], false);
    } else {
      this.source.setFilter([]);
    }
  }
}
