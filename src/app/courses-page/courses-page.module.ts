import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { DurationPipe } from '../pipes/duration.pipe';
import { SetBorderDirective } from '../directives/set-border.directive';
import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { CoursesPageComponent } from './courses-page.component';
import { SearchComponent } from './search/search.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CourseListComponent } from './course-list/course-list.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseDateCreationComponent } from './edit-course/course-date-creation/course-date-creation.component';
import { CourseDurationComponent } from './edit-course/course-duration/course-duration.component';
import { AuthorsComponent } from './edit-course/authors/authors.component';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseListComponent,
    SearchComponent,
    SingleCourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    PaginationComponent,
    OrderByPipe,
    DurationPipe,
    SetBorderDirective,
    CourseDateCreationComponent,
    CourseDurationComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    CoursesPageRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CoursesPageModule { }
