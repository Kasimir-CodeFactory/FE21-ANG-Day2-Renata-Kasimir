import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactDynComponent } from './contact-dyn/contact-dyn.component';
import { MainDynComponent } from './main-dyn/main-dyn.component';

const routes: Routes = [
  {
    path: "", component: MainDynComponent
  },{
    path: "contact", component: ContactDynComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
