import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReasonAndPerosnalInformationComponent } from './reason-and-perosnal-information.component';

const routes: Routes = [{ path: '', component: ReasonAndPerosnalInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReasonAndPerosnalInformationRoutingModule { }
