import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Property } from '../../../@core/data/models/property';

@Component({
  selector: 'app-dialog-new-payment',
  templateUrl: './dialog-new-payment.component.html',
  styleUrls: ['./dialog-new-payment.component.scss']
})
export class DialogNewPaymentComponent implements OnInit {

  @Input() service;
  public form: FormGroup;

  types = [
    'caution',
    'séjour',
    'frais',
    'restauration',
    'remboursement'
  ];

  statuses = [
    'payé',
    'non payé',
    'payé partiellement'
  ]

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      payer: [null, Validators.required],
      amount: [null, Validators.minLength(2)],
      date: [null, Validators.required],
      type: ['Choisir un type', Validators.minLength(2)],
      status: [null, Validators.required]
    });
  }

  close() {
    this.activeModal.dismiss();
  }
}
