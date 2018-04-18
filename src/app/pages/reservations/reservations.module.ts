import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ReservationsRoutingModule, routedComponents } from './reservations-routing.module';
import { ReservationComponent } from './index/components/table/reservation/reservation.component';
import { ReservationHeaderComponent } from './index/components/table/header/header.component';
import { MobileReservationComponent } from './index/components/mobile-table/mobile-reservation/mobile-reservation.component';
import { MobileHeaderComponent } from './index/components/mobile-table/mobile-header/mobile-header.component';
import { FiltersComponent } from './index/components/filters/filters.component';

@NgModule({
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    Ng2SmartTableModule,
    ThemeModule
  ],
  declarations: [
    ...routedComponents,
    ReservationComponent,
    ReservationHeaderComponent,
    MobileReservationComponent,
    MobileHeaderComponent,
    FiltersComponent
  ]
})
export class ReservationsModule { }
