import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherInfo3RoutingModule } from './other-info3-routing.module';
import { OtherInfo3Component } from './other-info3.component';


@NgModule({
  declarations: [OtherInfo3Component],
  imports: [
    CommonModule,
    OtherInfo3RoutingModule
  ]
})
export class OtherInfo3Module { }
