import { Component, OnInit } from '@angular/core';

import { CourseData } from '../../data-models/course-data';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
  //providers: [FilterPipe]
})
export class CourseListComponent implements OnInit {
  public courses: CourseData[] = [];
  public noDataMessage: string = 'No data. Feel free to add new course';

  constructor(
    private _filterPipe: FilterPipe,
    private _courseService: CourseService ) { }

  ngOnInit(): void {
    this.courses = this._courseService.getCourseList();
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

  onCourseFilter(searchRequest: string) {
    if (searchRequest == '') {
      this.courses = this._courseService.resetFilter();
    } else {
      this.courses = this._filterPipe.transform(this.courses, searchRequest);
    }
  }

  onCourseDeleted(courseId: number) {
    this.courses = this._courseService.deleteCourse(courseId);
  }

}
