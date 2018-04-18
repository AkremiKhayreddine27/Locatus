import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { ServicesRoutingModule, routedComponents } from './services-routing.module';
import { HeaderComponent } from './show/table/header/header.component';
import { ServiceComponent } from './show/table/service/service.component';
import { MobileServiceComponent } from './show/mobile-table/mobile-service/mobile-service.component';
import { MobileHeaderComponent } from './show/mobile-table/mobile-header/mobile-header.component';
import { CategoryComponent } from './index/components/category/category.component';
 

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ServicesRoutingModule
  ],
  declarations: [
    ...routedComponents, 
    HeaderComponent, 
    ServiceComponent, 
    MobileServiceComponent, 
    MobileHeaderComponent, 
    CategoryComponent
  ]
})
export class ServicesModule { }
