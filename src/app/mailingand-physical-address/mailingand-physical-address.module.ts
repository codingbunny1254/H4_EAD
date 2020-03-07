import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailingandPhysicalAddressRoutingModule } from './mailingand-physical-address-routing.module';
import { MailingandPhysicalAddressComponent } from './mailingand-physical-address.component';


@NgModule({
  declarations: [MailingandPhysicalAddressComponent],
  imports: [
    CommonModule,
    MailingandPhysicalAddressRoutingModule
  ]
})
export class MailingandPhysicalAddressModule { }
