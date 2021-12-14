import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {keyPath: 'login'}
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses-page/courses-page.module').then(m => m.CoursesPageModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    data: {keyPath: 'courses'}
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    data: {keyPath: 'login'}
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: {keyPath: 'notfound'}
  },
  {
    path: '**', redirectTo: '404',
    data: {keyPath: 'notfound'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
