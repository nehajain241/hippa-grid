import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HippaGridComponent } from './hippa-grid/hippa-grid.component';
import { NzButtonModule } from 'ng-zorro-antd/button';



const routes: Routes = [{ path: '', component: HippaGridComponent }];

@NgModule({
  declarations: [
    HippaGridComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NzButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
