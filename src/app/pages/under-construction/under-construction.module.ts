import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { UnderConstructionRoutingModule, routedComponents } from './under-contruction-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    UnderConstructionRoutingModule
  ],
  declarations: [...routedComponents]
}) 
export class UnderConstructionModule { }
