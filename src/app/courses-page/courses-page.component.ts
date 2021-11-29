import { Component, OnChanges, OnInit } from '@angular/core';
import { CourseData } from '../data-models/course-data';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnChanges {
  courses: CourseData[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('onInit');
    this.courses = [
      {
        id: 1,
        title: 'Name Tag 1',
        creationDate: new Date('11/29/2021'),
        durationMin: 75,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
      },
      {
        id: 2,
        title: 'Name Tag 2',
        creationDate: new Date('11/15/2021'),
        durationMin: 85,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
      },
      {
        id: 3,
        title: 'Name Tag 3',
        creationDate: new Date('11/20/2021'),
        durationMin: 90,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
      }
    ];
  }

  ngOnChanges(): void {
    console.log('onChanges');
  }

  trackByCourse(index: number, course: any) {
    return course.id;
  }

  onCourseDeleted(courseId: number) {
    console.log(courseId);
  }
}
