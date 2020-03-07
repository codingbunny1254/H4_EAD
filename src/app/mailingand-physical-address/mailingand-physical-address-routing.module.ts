import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailingandPhysicalAddressComponent } from './mailingand-physical-address.component';

const routes: Routes = [{ path: '', component: MailingandPhysicalAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailingandPhysicalAddressRoutingModule { }
