import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewReservationComponent } from './dialog-new-reservation.component';

describe('DialogNewReservationComponent', () => {
  let component: DialogNewReservationComponent;
  let fixture: ComponentFixture<DialogNewReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
