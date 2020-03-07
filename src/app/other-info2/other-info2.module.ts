import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherInfo2RoutingModule } from './other-info2-routing.module';
import { OtherInfo2Component } from './other-info2.component';


@NgModule({
  declarations: [OtherInfo2Component],
  imports: [
    CommonModule,
    OtherInfo2RoutingModule
  ]
})
export class OtherInfo2Module { }
