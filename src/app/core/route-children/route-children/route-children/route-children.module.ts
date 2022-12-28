import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteChildrenComponent } from '../route-children.component';



@NgModule({
  declarations: [RouteChildrenComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RouteChildrenComponent
  ]
})
export class RouteChildrenModule { }
