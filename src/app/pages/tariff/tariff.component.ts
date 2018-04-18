import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../@core/data/property.service';

@Component({
  selector: 'tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {

  defaultSelectPropertyMsg;

  properties = [];

  currentProperty = this.propertyService.currentProperty ? this.propertyService.currentProperty : this.properties[0];


  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    if (!this.currentProperty) {
      this.defaultSelectPropertyMsg = 'Choisir un bien';
    }
    this.properties = this.propertyService.properties.map(property => {
      return { label: property.title, value: property.title };
    });
  }

  setCurrentProperty(propertyTitle) {
    const property = this.propertyService.properties.filter(p => {
      return p.title === propertyTitle.value;
    })[0];
    this.propertyService.setCurrentProperty(property);
  }

  save() {
    
  }

}
