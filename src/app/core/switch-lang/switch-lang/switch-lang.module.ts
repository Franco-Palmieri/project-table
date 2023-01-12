import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwitchLangComponent} from "../switch-lang.component";



@NgModule({
  declarations: [SwitchLangComponent],
  imports: [
    CommonModule
  ],
  exports: [SwitchLangComponent]
})
export class SwitchLangModule { }
