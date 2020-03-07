import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherInfo1Component } from './other-info1.component';

const routes: Routes = [{ path: '', component: OtherInfo1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherInfo1RoutingModule { }
