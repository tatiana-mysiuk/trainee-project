import { Component, OnInit } from '@angular/core';
import { CourseData } from '../data-models/course-data';
import { FilterPipe } from '../pipes/filter.pipe';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  //providers: [FilterPipe]
})
export class CoursesPageComponent implements OnInit {
  public courses: CourseData[] = [];
  private _courses: CourseData[] = [];
  public noDataMessage: string = 'No data. Feel free to add new course';

  constructor(
    private _filterPipe: FilterPipe,
    private _courseService: CourseService ) { }

  ngOnInit(): void {
    this._courses = this._courseService.getCourseList();
    this.courses = [...this._courses];
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

  onCourseFilter(searchRequest: string) {
    if (searchRequest == '') {
      this.courses = this._courses;
    } else {
      this.courses = this._filterPipe.transform(this.courses, searchRequest);
    }
  }

  onCourseDeleted(courseId: number) {
    this.courses = this._courseService.deleteCourse(courseId);
  }
}
