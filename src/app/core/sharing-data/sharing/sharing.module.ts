import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharingComponent } from './sharing/sharing.component';
import { ParentModule } from '../parent/parent.module';



@NgModule({
  declarations: [
    SharingComponent
  ],
  imports: [
    CommonModule,
    ParentModule
  ],
  exports: [
    SharingComponent
  ]
})
export class SharingModule { }
