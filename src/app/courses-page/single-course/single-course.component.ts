import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CourseData } from '../../data-models/course-data';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss']
})
export class SingleCourseComponent implements OnInit {
  @Input() courseNumber: number = 0;
  @Input() courseData: CourseData = {
    id: 0,
    title: '',
    creationDate: new Date(),
    durationMin: 0,
    description: ''
  };

  @Output() courseDeleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
    return;
  }

  onDeleteCourse(courseId: number) {
    this.courseDeleted.emit(courseId);
  }
}
