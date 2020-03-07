import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherInfo2Component } from './other-info2.component';

const routes: Routes = [{ path: '', component: OtherInfo2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherInfo2RoutingModule { }
