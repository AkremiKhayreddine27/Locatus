import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from '../@core/utils/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'under-construction',
      canActivate: [AuthGuard],
      loadChildren: './under-construction/under-construction.module#UnderConstructionModule'
    },
    {
      path: 'dashboard',
      canActivate: [AuthGuard],
      component: DashboardComponent,
    }, 
    {
      path: 'properties',
      canActivate: [AuthGuard],
      loadChildren: './properties/properties.module#PropertiesModule',
    },
    {
      path: 'tariff',
      canActivate: [AuthGuard],
      loadChildren: './tariff/tariff.module#TariffModule',
    },
    {
      path: 'calendar',
      canActivate: [AuthGuard],
      loadChildren: './calendar/app-calendar.module#AppCalendarModule',
    },
    {
      path: 'reservations',
      canActivate: [AuthGuard],
      loadChildren: './reservations/reservations.module#ReservationsModule'
    },
    {
      path: 'services',
      canActivate: [AuthGuard],
      loadChildren: './services/services.module#ServicesModule'
    },
    {
      path: 'contacts',
      canActivate: [AuthGuard],
      loadChildren: './contact/contact.module#ContactModule'
    },
    {
      path: 'account',
      canActivate: [AuthGuard],
      loadChildren: './account/account.module#AccountModule'
    },
    {
      path: 'map',
      loadChildren: './map/map.module#MapModule',
    },
    {
      path: '',
      redirectTo: 'dashboard',
      canActivate: [AuthGuard],
      pathMatch: 'full',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
