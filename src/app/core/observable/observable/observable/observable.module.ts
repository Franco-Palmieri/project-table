import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from '../observable.component';



@NgModule({
  declarations: [
    ObservableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObservableComponent
  ]
})
export class ObservableModule { }
