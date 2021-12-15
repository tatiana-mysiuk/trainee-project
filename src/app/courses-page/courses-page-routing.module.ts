import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CoursesPageComponent } from './courses-page.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
    children: [
      {
        path: '', component: CourseListComponent
      },
      {
        path: 'add-course', component: EditCourseComponent
      },
      {
        path: ':id', component: EditCourseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule { }
