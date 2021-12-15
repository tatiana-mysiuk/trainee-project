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
        canActivate: [AuthGuard]
      },
      {
        path: 'add-course',
        component: EditCourseComponent,
        canActivate: [AuthGuard]
      },
      /*{
        path: '404', component: NotFoundComponent
      },*/
      {
        path: ':alias',
        component: EditCourseComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class CoursesPageRoutingModule { }
