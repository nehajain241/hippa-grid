import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-attachment',
  templateUrl: './view-attachment.component.html',
  styleUrls: ['./view-attachment.component.scss']
})
export class ViewAttachmentComponent implements OnInit {
  @Input() public url: any;
  constructor() { }

  ngOnInit(): void {
  }

}
