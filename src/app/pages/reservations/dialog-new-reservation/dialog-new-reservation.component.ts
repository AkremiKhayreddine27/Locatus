import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as dateFns from 'date-fns';
import { SmartTableService } from '../../../@core/data/smart-table.service';

const HOURS_IN_DAY = 48;

@Component({
  selector: 'app-dialog-new-reservation',
  templateUrl: './dialog-new-reservation.component.html',
  styleUrls: ['./dialog-new-reservation.component.scss']
})
export class DialogNewReservationComponent implements OnInit {

  public form: FormGroup;
  public hours: any[] = [];

  public properties: string[] = [];

  public status: any[] = [
    { text: 'reserved', value: 'reserved' },
    { text: 'provisional', value: 'provisional' },
    { text: 'canceled', value: 'canceled' }
  ];

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal, public smartTableService: SmartTableService) { }

  ngOnInit() {
    let startHour = dateFns.startOfDay(new Date());
    for (let i = 0; i < HOURS_IN_DAY; i++) {
      this.hours.push({ label: dateFns.format(startHour, 'HH:mm'), value: dateFns.format(startHour, 'HH:mm')});
      startHour = dateFns.addMinutes(startHour, 30);
    }
    this.form = this.formBuilder.group({
      property: [this.properties[0], Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phone: [null, Validators.required],
      email: [null, Validators.required],
      startTime: [dateFns.format(startHour, 'HH:mm'), Validators.required],
      endTime: [dateFns.format(startHour, 'HH:mm'), Validators.required],
      startDate: [{
        year: new Date().getFullYear(),
        month: dateFns.getMonth(new Date()) + 1,
        day: new Date().getDate()
      },
      Validators.required],
      endDate: [{
        year: new Date().getFullYear(),
        month: dateFns.getMonth(new Date()) + 1,
        day: new Date().getDate()
      }, Validators.required],
      status: [this.status[0], Validators.required],
      amount: [null, Validators.required]
    });
  }

  increment(type) {
    if (type === 'adulte') {
      this.form.get('lodger.nbrAdultes').setValue(this.form.get('lodger.nbrAdultes').value + 1);
    } else {
      this.form.get('lodger.nbrChildrens').setValue(this.form.get('lodger.nbrChildrens').value + 1);
    }
  }

  decrement(type) {
    if (type === 'adulte') {
      if (this.form.get('lodger.nbrAdultes').value > 0) {
        this.form.get('lodger.nbrAdultes').setValue(this.form.get('lodger.nbrAdultes').value - 1);
      }
    } else {
      if (this.form.get('lodger.nbrChildrens').value > 0) {
        this.form.get('lodger.nbrChildrens').setValue(this.form.get('lodger.nbrChildrens').value - 1);
      }
    }
  }

  submit(form) {
    this.form.value.startDate = dateFns.parse(this.form.value.startDate.year + '-' + this.form.value.startDate.month + '-' + this.form.value.startDate.day);
    this.form.value.startDate = dateFns.format(this.form.value.startDate, 'DD-MMM-YYYY hh:mm');
    this.form.value.endDate = dateFns.parse(this.form.value.endDate.year + '-' + this.form.value.endDate.month + '-' + this.form.value.endDate.day).toString();
    this.form.value.endDate = dateFns.format(this.form.value.endDate, 'DD-MMM-YYYY hh:mm');
    this.smartTableService.add(this.form.value);
    this.activeModal.close();
  }

  close() {
    this.activeModal.dismiss();
  }

}
