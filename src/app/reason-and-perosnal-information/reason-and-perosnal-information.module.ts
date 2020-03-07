import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReasonAndPerosnalInformationRoutingModule } from './reason-and-perosnal-information-routing.module';
import { ReasonAndPerosnalInformationComponent } from './reason-and-perosnal-information.component';


@NgModule({
  declarations: [ReasonAndPerosnalInformationComponent],
  imports: [
    CommonModule,
    ReasonAndPerosnalInformationRoutingModule
  ]
})
export class ReasonAndPerosnalInformationModule { }
