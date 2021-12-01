import { Component, Input, EventEmitter, Output } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CourseData } from '../../data-models/course-data';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss']
})
export class SingleCourseComponent {
  @Input() courseNumber: number = 0;
  @Input() courseData: CourseData = {
    id: 0,
    title: '',
    creationDate: new Date(),
    durationMin: 0,
    description: '',
    topRated: false
  };

  @Output() courseDeleted = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '25%',
      data: {courseName: this.courseData.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._onDeleteCourse(this.courseData.id);
      }
    });
  }

  private _onDeleteCourse(courseId: number): void {
    this.courseDeleted.emit(courseId);
  }
}
