import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ApplicationFormComponent} from '../app/Components/application-form/application-form.component';


const routes: Routes = [{path: 'applicationForm',
component: ApplicationFormComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
