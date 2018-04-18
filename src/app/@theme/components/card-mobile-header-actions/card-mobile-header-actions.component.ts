import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-mobile-header-actions',
  templateUrl: './card-mobile-header-actions.component.html',
  styleUrls: ['./card-mobile-header-actions.component.scss']
})
export class CardMobileHeaderActionsComponent implements OnInit {

  @Input() actions;

  @Output() actionEvent: EventEmitter<{ action : string }> = new EventEmitter();

  @Output() dropdownItemEvent: EventEmitter<{ item: any }> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  actionClicked(action) {
    this.actionEvent.emit({action: action});
  }

  dropdownItemClicked(item) {
    this.dropdownItemEvent.emit({ item: item });
  }

}
