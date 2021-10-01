import { ICellRendererParams } from 'ag-grid-community';
import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements AgRendererComponent {
  public buttons: any;
  public params: any;

  // gets called once before the renderer is used
  agInit(params: ICellRendererParams): void {
    this.buttons = this.getValueToDisplay(params);
    this.params = params;
  }

  // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams) {
    // set value into cell again
    this.buttons = this.getValueToDisplay(params);
    this.params = params;
    return true;
  }

  buttonClicked() {
    alert(`${this.buttons} medals won!`);
  }

  getValueToDisplay(params: any) {
    const buttons = params[params.colDef.field];
    return buttons && buttons.length ? buttons : [];
  }
}
