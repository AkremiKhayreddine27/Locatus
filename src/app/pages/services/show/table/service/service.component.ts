import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DialogNewPaymentComponent } from '../../../dialog-new-payment/dialog-new-payment.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input()
  service;

  isPaymentCollapsed: boolean = true;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openNewPayment() {
    const modalRef = this.modalService.open(DialogNewPaymentComponent, { size: 'lg', container: 'nb-layout' });
    modalRef.componentInstance.service = this.service;
  }

}
