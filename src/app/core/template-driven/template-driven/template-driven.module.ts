import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from '../template-driven.component';



@NgModule({
  declarations: [
    TemplateDrivenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateDrivenComponent
  ]
})
export class TemplateDrivenModule { }
