
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CourseData } from '../../data-models/course-data';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  //providers: [FilterPipe]
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit, AfterViewInit, OnDestroy {
  public courses: CourseData[] = [];
  public noDataMessage: string = 'No data. Feel free to add new course';
  public pageSize: number = 5;
  public startFrom: number = 0;
  private courseAddSubscription$ : Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private _filterPipe: FilterPipe,
    private _courseService: CourseService,
    private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this._courseService.getCourseList(this.pageSize, this.startFrom);
    this.courseAddSubscription$ = this._courseService.coursesAdded.subscribe(data => {
      this.courses = data.courses;
      this.ref.markForCheck();

      switch (data.message) {
        case '':
          this.noDataMessage = 'No data. Feel free to add new course';
          break;
        case 'search':
          this.noDataMessage = 'Nothing found. Try another request';
          break;
        default:
          this.snackBar.open(data.message, '', {duration: 1000});
      }
    });
  }

  ngAfterViewInit() {
    console.log(this.courses)
  }

  trackByCourseId(index: number, course: CourseData): number | null {
    return course.id;
  }

  onCourseFilter(searchRequest: string) {
    /*if (searchRequest == '') {
      this.courses = this._courseService.resetFilter();
    } else {
      this.courses = this._filterPipe.transform(this.courses, searchRequest);
    }*/
    this._courseService.getFilteredList(searchRequest);
  }

  onCourseDeleted(courseId: number) {
    this._courseService.deleteCourse(courseId);
  }

  onLoadMore() {
    this.startFrom += 5;
    this._courseService.getCourseList(this.pageSize, this.startFrom);
  }

  ngOnDestroy(): void {
    this.courseAddSubscription$.unsubscribe();
  }

}
