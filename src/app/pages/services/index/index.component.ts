import { Component, OnInit } from '@angular/core';
import { Service } from '../../../@core/data/models/service';
import { ServicesService } from '../../../@core/data/services.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public services;

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
    this.services = this.servicesService.all();
  }

}
