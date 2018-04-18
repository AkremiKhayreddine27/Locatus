import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';
import { PlayerService } from './player.service';
import { EventsService } from './events.service';
import { CalendarService } from './calendar.service';
import { CalendarSettingsService } from './calendar-settings.service';
import { PropertyService } from './property.service';
import { ServicesService } from './services.service';
import { EquipementsService } from './equipements.service';
import { ReservationsService } from './reservations.service';
import { AppUserService } from './app-user.service';
import { TariffsService } from './tariffs.service';
import { ContactsService } from './contacts.service';
const SERVICES = [
  UserService,
  ElectricityService,
  StateService,
  SmartTableService,
  PlayerService,
  EventsService,
  CalendarService,
  CalendarSettingsService,
  PropertyService,
  ServicesService,
  EquipementsService,
  ReservationsService,
  AppUserService,
  TariffsService,
  ContactsService
];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
