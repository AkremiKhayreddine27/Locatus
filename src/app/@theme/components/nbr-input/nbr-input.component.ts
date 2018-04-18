import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nbr-input',
  templateUrl: './nbr-input.component.html',
  styleUrls: ['./nbr-input.component.scss']
})
export class NbrInputComponent implements OnInit {

  @Input()
  number;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.number++;
  }

  decrement() {
      if (this.number > 0) {
        this.number--;
      }
    }

}
