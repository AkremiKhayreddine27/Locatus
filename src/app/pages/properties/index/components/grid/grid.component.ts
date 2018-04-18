import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../../../../@core/data/property.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() properties;
  
  constructor(private service: PropertyService, private router: Router) { }

  ngOnInit() {

  }

  delete(property) {
    this.service.remove(property);
  }

  navigate(link, property) {
    this.service.setCurrentProperty(property);
    this.router.navigate(['/pages/' + link]);
  }
}
