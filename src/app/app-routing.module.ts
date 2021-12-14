import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'courses', component: CoursesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
