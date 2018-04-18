import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapRoutingModule, routedComponents } from './map-routing.module';
import { YagaModule } from '@yaga/leaflet-ng2';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    MapRoutingModule,
    YagaModule
  ],
  declarations: [...routedComponents]
})
export class MapModule { }
