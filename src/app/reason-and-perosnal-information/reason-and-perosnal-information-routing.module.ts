import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaterialModule} from '../material/material.module';

import { ReasonAndPerosnalInformationComponent } from './reason-and-perosnal-information.component';

const routes: Routes = [{ path: '', component: ReasonAndPerosnalInformationComponent }];

@NgModule({
  imports: [
    MaterialModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReasonAndPerosnalInformationRoutingModule { }
