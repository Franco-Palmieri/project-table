import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildModule } from '../child/child.module';



@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    ChildModule
  ],
  exports: [
    ParentComponent
  ]
})
export class ParentModule { }
