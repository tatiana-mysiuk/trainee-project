
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseData } from '../../data-models/course-data';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CourseService } from '../../services/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  //providers: [FilterPipe]
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit, OnDestroy {
  public courses: CourseData[] = [];
  public noDataMessage: string = 'No data. Feel free to add new course';
  private courseAddSubscription$ : Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private _filterPipe: FilterPipe,
    private _courseService: CourseService,
    private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this._courseService.getCourseList();
    this.courseAddSubscription$ = this._courseService.coursesAdded.subscribe(data => {
      this.courses = data.courses;
      this.ref.markForCheck();
      if (data.message !== '') {
        this.snackBar.open(data.message, '', {duration: 1000});
      }
    });
  }

  trackByCourseId(index: number, course: CourseData): number | null {
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
    //this.courses =
    this._courseService.deleteCourse(courseId);
  }

  ngOnDestroy(): void {
    this.courseAddSubscription$.unsubscribe();
  }

}
