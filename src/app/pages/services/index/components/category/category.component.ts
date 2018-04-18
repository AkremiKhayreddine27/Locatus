import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() subCategory;

  isCollapsed = true;
   
  constructor() { }

  ngOnInit() { 
  }

}
