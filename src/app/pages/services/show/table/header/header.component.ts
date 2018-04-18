import { Component, OnInit } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../../../@core/data/smart-table.service';


@Component({
  selector: 'app-service-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  isTouristsUp = false;
  isVisitUp = false;
  isPaymentUp = false;
  isStatusUp = false;

  constructor(public smartTableService: SmartTableService) { }

  ngOnInit() {
    this.source = this.smartTableService.getData();
  }

  onSortTourists(direction) {
    this.source.setSort([
      {
        field: 'lodger',
        direction: direction,
        compare: (direction: any, a: any, b: any) => {
          let first = typeof a.firstname === 'string' ? a.firstname.toLowerCase() : a;
          let second = typeof b.firstname === 'string' ? b.firstname.toLowerCase() : b;

          if (first < second) {
            return -1 * direction;
          }
          if (first > second) {
            return direction;
          }
          return 0;
        }
      },
    ], true);
  }

  onSortPaymentStatus(direction) {
    this.source.setSort([
      {
        field: 'payment',
        direction: direction,
        compare: (direction: any, a: any, b: any) => {
          let first = typeof a.status === 'string' ? a.status.toLowerCase() : a;
          let second = typeof b.status === 'string' ? b.status.toLowerCase() : b;

          if (first < second) {
            return -1 * direction;
          }
          if (first > second) {
            return direction;
          }
          return 0;
        }
      },
    ], true);
  }

  onSortStatus(direction) {
    this.source.setSort([
      {
        field: 'status',
        direction: direction
      },
    ], true);
  }

  onSortVisit(direction) {
    this.source.setSort([
      {
        field: 'startDate',
        direction: direction
      },
    ], true);
  }

}
