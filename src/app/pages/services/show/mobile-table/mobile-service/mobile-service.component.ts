import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-service',
  templateUrl: './mobile-service.component.html',
  styleUrls: ['./mobile-service.component.scss']
})
export class MobileServiceComponent implements OnInit {

  @Input() service;

  isPaymentCollapsed: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
