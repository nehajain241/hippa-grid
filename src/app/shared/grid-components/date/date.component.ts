import { ICellRendererParams } from 'ag-grid-community';
import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements AgRendererComponent {
  public cellValue: string;

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams) {
    // set value into cell again
    this.cellValue = this.getValueToDisplay(params);
    return true;
  }

  buttonClicked() {
    alert(`${this.cellValue} medals won!`);
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
}

