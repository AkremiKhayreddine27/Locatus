import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DropzoneConfigInterface, DropzoneComponent } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.scss']
})
export class PicsComponent implements OnInit {

  isCollapsed: boolean = true;

  @Input() images;

  @ViewChild(DropzoneComponent) dropzone: DropzoneComponent;

  public config: DropzoneConfigInterface = {
    url: 'http://www.example.com',
    clickable: true,
    maxFiles: 10,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    uploadMultiple: true,
    acceptedFiles: 'image/*',
    
  };

  constructor() { }

  ngOnInit() {
  }

  onUploadError($event) {

  }

  onUploadSuccess($event) {

  }

}
