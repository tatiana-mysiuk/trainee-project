import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { CoursesPageComponent } from './courses-page.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseListComponent } from './course-list/course-list.component';
//import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
    children: [
      {
        path: '',
        component: CourseListComponent,
        canActivate: [AuthGuard],
        data: {keyPath: 'list', reuse: true}
      },
      {
        path: 'add-course',
        component: EditCourseComponent,
        canActivate: [AuthGuard],
        data: {keyPath: 'add'}
      },
      /*{
        path: '404',
        component: NotFoundComponent,
        data: {keyPath: 'notfound'}
      },*/
      {
        path: ':id',
        component: EditCourseComponent,
        canActivate: [AuthGuard],
        data: {keyPath: 'edit'}
      }
    ],
    data: {keyPath: 'courses'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule { }
