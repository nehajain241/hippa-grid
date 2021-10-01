import { DateComponent } from './../grid-components/date/date.component';
import { IconButtonComponent } from './../grid-components/icon-button/icon-button.component';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  @Input() agGridoptions: any;
  gridApi: any;
  gridOptions = {
    pagination: true,
    rowHeight: 45,
    rowSelection: 'single',
    defaultColDef: {
      flex: 1,
      filter: true,
      cellRendererParams: this,
      sortable: true
    },
  }
  frameworkComponents = {
    buttons: IconButtonComponent,
    date: DateComponent
  };
  @Input() cols: any = [];

  @Input() rowData: any = [];

  constructor() { }

  gridReady(params: any) {
    this.gridApi = params.api;
  }

  ngOnInit(): void {
    this.gridOptions = {
      ...this.gridOptions,
      ...this.agGridoptions
    };
  }

}
