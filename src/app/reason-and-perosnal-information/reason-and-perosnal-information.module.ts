import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReasonAndPerosnalInformationRoutingModule } from './reason-and-perosnal-information-routing.module';
import { ReasonAndPerosnalInformationComponent } from './reason-and-perosnal-information.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [ReasonAndPerosnalInformationComponent],
  imports: [
    CommonModule,
    ReasonAndPerosnalInformationRoutingModule,
    MaterialModule
   
   ]
})
export class ReasonAndPerosnalInformationModule { }
