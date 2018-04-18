import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Property } from '../../../@core/data/models/property';
import { PropertyService } from '../../../@core/data/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isFilterCollapsed = true;

  isSearching = false;

  isGridView = true;

  properties: Property[] = [];

  headerActions = [
    { title: 'search', type: 'link', icon: 'fa fa-search', clickAction: 'search', displayInMobile: true },
    { title: 'filter', type: 'link', icon: 'fa fa-filter', clickAction: 'filter', displayInMobile: false },
    {
      title: 'sort', type: 'dropdown', icon: 'fa fa-sort', dropdownItems: [
        {
          title: 'Type',
          action: 'sort',
          value: 'type',
          direction: 'asc'
        },
        {
          title: 'Statut',
          action: 'sort',
          value: 'status',
          direction: 'asc',
        },
        {
          title: 'Platform',
          action: 'sort',
          value: 'platform',
          direction: 'asc',
        }
      ], displayInMobile: false
    },
    { title: 'add', type: 'link', icon: 'fa fa-plus', clickAction: 'add', displayInMobile: false },
    { title: 'display', type: 'link', icon: 'nb-grid-a', clickAction: 'toggleDisplay', displayInMobile: false },
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

  searchFields = ['title', 'location.address'];

  source: LocalDataSource = new LocalDataSource();

  constructor(private propertyService: PropertyService, private router: Router) { }

  ngOnInit() {
    this.source = this.propertyService.all();
    this.source.setFilter([]);
    this.source.onChanged().subscribe(value => {
      this.properties = value.elements;
    });
    this.propertyService.refresh.subscribe(properties => {
      this.source = this.propertyService.all();
      this.properties = properties;
    });
  }

  zoomChange($event) {
  }

  handleHeaderEvent(event) {
    this[event.action]();
  }

  handleDropdownEvent(event) {
    this[event.item.action](event.item);
  }

  toggleDisplay() {
    this.isGridView = !this.isGridView;
  }

  search() {
    this.isSearching = !this.isSearching;
    this.isFilterCollapsed = true;
  }

  import(item) {
    console.log('import');
  }

  export(item) {
    console.log('export');
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

  filter() {
    this.isFilterCollapsed = !this.isFilterCollapsed;
    this.isSearching = false;
  }

  add() {
    this.router.navigateByUrl('/pages/properties/create');
  }

  onSearch(query) {
    if (query !== '') {
      this.source.setFilter([
        {
          field: 'title',
          search: query
        },
        {
          field: 'location',
          search: query,
          filter: (cell: any, search: string) => {
            if (cell.address.toLowerCase().indexOf(search) !== -1) {
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
