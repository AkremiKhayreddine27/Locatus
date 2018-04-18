import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from '../../../../../../@core/data/models/reservation';
import { PropertyService } from '../../../../../../@core/data/property.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  @Input() reservation: Reservation;

  isPaymentCollapsed: boolean = true;

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.reservation.property = this.propertyService.currentProperty;
  }

}
