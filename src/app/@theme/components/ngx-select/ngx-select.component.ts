import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-select',
  templateUrl: './ngx-select.component.html',
  styleUrls: ['./ngx-select.component.scss']
})
export class NgxSelectComponent implements OnInit {

  @Input() elements;

  @Input() default;


  @Input() withActive;

  element;

  @Output() selectChanged: EventEmitter<{ element }> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.element = this.default ? { label: null, value: null } : this.elements[0];
  }

  setElement(element) {
    this.element = element;
    this.selectChanged.emit({ element });
  }

}
