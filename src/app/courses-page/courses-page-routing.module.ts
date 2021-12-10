import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CoursesPageComponent } from './courses-page.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesPageComponent,
    //data: { itemLabel: 'Courses' },

    children: [
      {
        path: '',
        component: CourseListComponent,
        data: { itemLabel: 'Courses' }
      },
      {
        path: 'add-course',
        component: EditCourseComponent,
        data: { itemLabel: 'Add course' }
      },
      {
        path: ':id',
        component: EditCourseComponent,
        data: { itemLabel: 'New courses' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule { }
