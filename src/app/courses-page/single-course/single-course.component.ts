import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CourseData } from '../../data-models/course-data';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleCourseComponent implements OnChanges {
  @Input() courseNumber: number;
  @Input() courseData: CourseData;
  public creationDate: Date;
  public alias: string = '';

  @Output() courseDeleted = new EventEmitter<number>();

  constructor( public dialog: MatDialog ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.creationDate = new Date(this.courseData.date);
  }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '25%',
      data: {courseName: this.courseData.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if ( this.courseData.id !== null ) {
          this._onDeleteCourse(this.courseData.id);
        }
      }
    });
  }

  private _onDeleteCourse(courseId: number): void {
    this.courseDeleted.emit(courseId);
  }
}
