import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationFormComponent} from '../app/Components/application-form/application-form.component';
import {LoginComponent} from '../app/Components/login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'applicationForm',component: ApplicationFormComponent,
},
  { path: 'perosnalinformation', loadChildren: () => import('./reason-and-perosnal-information/reason-and-perosnal-information.module').then(m => m.ReasonAndPerosnalInformationModule) },
  { path: 'address', loadChildren: () => import('./mailingand-physical-address/mailingand-physical-address.module').then(m => m.MailingandPhysicalAddressModule) },
  { path: 'otherinfo1', loadChildren: () => import('./other-info1/other-info1.module').then(m => m.OtherInfo1Module) },
  { path: 'otherinfo2', loadChildren: () => import('./other-info2/other-info2.module').then(m => m.OtherInfo2Module) },
  { path: 'otherinfo3', loadChildren: () => import('./other-info3/other-info3.module').then(m => m.OtherInfo3Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
