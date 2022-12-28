import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteParentComponent } from '../route-parent.component';
import { RouteChildrenModule } from '../../route-children/route-children/route-children.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RouteParentComponent],
  imports: [
    CommonModule,
    RouteChildrenModule,
    RouterModule
  ],
  exports: [RouteParentComponent]
})
export class RouteParentModule { }
