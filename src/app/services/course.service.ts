import { Injectable } from '@angular/core';
import { CourseData } from '../data-models/course-data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _courses: CourseData[] = [];

  constructor() { }

  getCourseList() {
    this._courses = [
      {
        id: 1,
        title: 'Name Tag1',
        creationDate: new Date('11/29/2021'),
        durationMin: 75,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
        topRated: false
      },
      {
        id: 2,
        title: 'Name Tag2',
        creationDate: new Date('11/15/2021'),
        durationMin: 85,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
        topRated: true
      },
      {
        id: 3,
        title: 'Name Tag3',
        creationDate: new Date('12/20/2021'),
        durationMin: 90,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
        topRated: false
      }
    ];

    return [...this._courses];
  }

  resetFilter():CourseData[] {
    return [...this._courses];
  }

  createCourse(course: CourseData): CourseData[] {
    this._courses.push(course);
    return [...this._courses];
  }

  getCourseById(courseId: number): any {
    return this._courses.find(course => course.id == courseId);
  }

  updateCourse(course: CourseData) {

  }

  deleteCourse(courseId: number): CourseData[] {
    this._courses = this._courses.filter(course => course.id != courseId);
    return [...this._courses];
  }
}
