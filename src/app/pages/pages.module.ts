import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { CalendarModule } from 'ngx-calendar';
import { DialogNewEventComponent } from './calendar/dialog-new-event/dialog-new-event.component';
import { DialogShowEventComponent } from './calendar/dialog-show-event/dialog-show-event.component';
import { DialogImportCalendarComponent } from './calendar/dialog-import-calendar/dialog-import-calendar.component';
import { DialogNewCalendarComponent } from './calendar/dialog-new-calendar/dialog-new-calendar.component';
import { DialogExportCalendarComponent } from './calendar/dialog-export-calendar/dialog-export-calendar.component';
import { DialogShowDayEventsComponent } from './calendar/dialog-show-day-events/dialog-show-day-events.component';
import { CalendarSettingsComponent } from './calendar/calendar-settings/calendar-settings.component';
import { DialogNewReservationComponent } from './reservations/dialog-new-reservation/dialog-new-reservation.component';
import { DialogNewServiceComponent } from './services/dialog-new-service/dialog-new-service.component';
import { DialogNewPaymentComponent } from './services/dialog-new-payment/dialog-new-payment.component';
import { DialogNewSeasonComponent } from './tariff/dialog-new-season/dialog-new-season.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { DialogNewEventComponent as DialogNewTariffEventComponent } from './tariff/dialog-new-event/dialog-new-event.component';
import { DialogNewContactComponent } from './contact/dialog-new-contact/dialog-new-contact.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    CalendarModule.forRoot()
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    DialogNewEventComponent,
    DialogShowEventComponent,
    DialogImportCalendarComponent,
    DialogNewCalendarComponent,
    DialogExportCalendarComponent,
    DialogShowDayEventsComponent,
    CalendarSettingsComponent,
    DialogNewReservationComponent,
    DialogNewServiceComponent,
    DialogNewPaymentComponent,
    DialogNewSeasonComponent,
    DialogNewTariffEventComponent,
    DialogNewContactComponent,
    PricingTableComponent
  ],
  entryComponents: [
    DialogNewEventComponent,
    DialogShowEventComponent,
    DialogImportCalendarComponent,
    DialogNewCalendarComponent,
    DialogExportCalendarComponent,
    DialogShowDayEventsComponent,
    CalendarSettingsComponent,
    DialogNewReservationComponent,
    DialogNewServiceComponent,
    DialogNewPaymentComponent,
    DialogNewSeasonComponent,
    DialogNewTariffEventComponent,
    DialogNewContactComponent
  ]
})
export class PagesModule {
}
