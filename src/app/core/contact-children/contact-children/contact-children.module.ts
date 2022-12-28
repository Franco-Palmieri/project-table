import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactChildrenComponent } from '../contact-children.component';



@NgModule({
  declarations: [
    ContactChildrenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactChildrenComponent
  ]
})
export class ContactChildrenModule { }
