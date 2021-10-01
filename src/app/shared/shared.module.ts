import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGridComponent } from './data-grid/data-grid.component';
import { IconButtonComponent } from './grid-components/icon-button/icon-button.component';
import { DateComponent } from './grid-components/date/date.component';
import { AddEditHippaComponent } from './add-edit-hippa/add-edit-hippa.component';
import { AgGridModule } from 'ag-grid-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ViewAttachmentComponent } from './view-attachment/view-attachment.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgxDocViewerModule } from 'ngx-doc-viewer';


@NgModule({
  declarations: [
    DataGridComponent,
    IconButtonComponent,
    DateComponent,
    AddEditHippaComponent,
    ViewAttachmentComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    NzIconModule,
    NzToolTipModule,
    NzModalModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NgxDocViewerModule,
    NzButtonModule
  ],
  exports: [
    DataGridComponent,
    AddEditHippaComponent
  ],
})
export class SharedModule { }
