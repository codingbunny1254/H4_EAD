import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherInfo3Component } from './other-info3.component';

const routes: Routes = [{ path: '', component: OtherInfo3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherInfo3RoutingModule { }
