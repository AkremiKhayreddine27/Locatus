import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../../../../../../@core/data/models/reservation';

@Component({
  selector: 'app-mobile-reservation',
  templateUrl: './mobile-reservation.component.html',
  styleUrls: ['./mobile-reservation.component.scss']
})
export class MobileReservationComponent implements OnInit {

  @Input() reservation: Reservation;

  isPaymentCollapsed: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
