import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ToasterModule } from 'angular2-toaster';

import { YagaModule } from '@yaga/leaflet-ng2';
import { YagaGpsModule } from '@yaga/leaflet-ng2-gps';

import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { PropertiesRoutingModule, routedComponents } from './properties-routing.module';
import { IdentificationComponent } from './show/components/identification/identification.component';
import { LocationComponent } from './show/components/location/location.component';
import { DescriptionComponent } from './show/components/description/description.component';
import { PicsComponent } from './show/components/pics/pics.component';
import { EquipementsComponent } from './show/components/equipements/equipements.component';
import { LinksComponent } from './show/components/links/links.component';
import { EquipementComponent } from './show/components/equipements/equipement/equipement.component';
import { FiltersComponent } from './index/components/filters/filters.component';
import { LinkDirective } from './show/components/links/link-form-group.directive';
import { LinkComponent } from './show/components/links/link-form-group.component';
import { GridComponent } from './index/components/grid/grid.component';
import { DocumentsComponent } from './show/components/documents/documents.component';
import { AmenitiesComponent } from './show/components/amenities/amenities.component';
import { RulesComponent } from './show/components/rules/rules.component';
import { TableComponent } from './index/components/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    YagaModule,
    YagaGpsModule,
    DropzoneModule,
    PropertiesRoutingModule,
    Ng2SmartTableModule,
    ToasterModule
  ],
  declarations: [
    ...routedComponents,
    IdentificationComponent,
    LocationComponent,
    DescriptionComponent,
    PicsComponent,
    EquipementsComponent,
    LinksComponent,
    EquipementComponent,
    FiltersComponent,
    LinkDirective,
    LinkComponent,
    GridComponent,
    DocumentsComponent,
    AmenitiesComponent,
    RulesComponent,
    TableComponent
  ],
  entryComponents: [LinkComponent]
}) 
export class PropertiesModule { }
