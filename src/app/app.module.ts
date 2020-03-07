import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationFormComponent } from './Components/application-form/application-form.component';
import { LoginComponent } from './Components/login/login.component';
import { ReasonAndPersonalDetailsComponent } from './reason-and-personal-details/reason-and-personal-details.component';
import { MailingAndPhysicalAddressDetailsComponent } from './mailing-and-physical-address-details/mailing-and-physical-address-details.component';
import { OtherInformationComponent } from './other-information/other-information.component';
import { OtherInformationPart2Component } from './other-information-part2/other-information-part2.component';
import { OtherInformationPart3Component } from './other-information-part3/other-information-part3.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    LoginComponent,
    ReasonAndPersonalDetailsComponent,
    MailingAndPhysicalAddressDetailsComponent,
    OtherInformationComponent,
    OtherInformationPart2Component,
    OtherInformationPart3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
