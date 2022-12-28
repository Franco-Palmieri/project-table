import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from '../contacts.component';
import { ContactChildrenModule } from '../../contact-children/contact-children/contact-children.module';



@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactChildrenModule
  ],
  exports: [
    ContactsComponent
  ]
})
export class ContactsModule { }
