import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherInfo1RoutingModule } from './other-info1-routing.module';
import { OtherInfo1Component } from './other-info1.component';


@NgModule({
  declarations: [OtherInfo1Component],
  imports: [
    CommonModule,
    OtherInfo1RoutingModule
  ]
})
export class OtherInfo1Module { }
