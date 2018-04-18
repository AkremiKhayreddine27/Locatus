import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileReservationComponent } from './mobile-reservation.component';

describe('MobileReservationComponent', () => {
  let component: MobileReservationComponent;
  let fixture: ComponentFixture<MobileReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
