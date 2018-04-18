import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DropzoneConfigInterface, DropzoneComponent } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  isCollapsed: boolean = true;

  @Input() documents;

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
