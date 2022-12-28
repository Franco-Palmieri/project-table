import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeFunctionsComponent } from '../pipe-functions.component';



@NgModule({
  declarations: [
    PipeFunctionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeFunctionsComponent
  ]
})
export class PipeFunctionsModule { }
