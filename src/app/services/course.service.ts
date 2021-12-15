import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseData } from '../data-models/course-data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _courses: CourseData[] = [];

  constructor(private router: Router) {
    this._courses = [
      {
        id: 1,
        alias: 'name-tag1',
        title: 'Name Tag1',
        creationDate: new Date('11/29/2021'),
        durationMin: 75,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
        topRated: false
      },
      {
        id: 2,
        alias: 'name-tag2',
        title: 'Name Tag2',
        creationDate: new Date('11/15/2021'),
        durationMin: 85,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
        topRated: true
      },
      {
        id: 3,
        alias: 'name-tag3',
        title: 'Name Tag3',
        creationDate: new Date('12/20/2021'),
        durationMin: 90,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
        topRated: false
      }
    ];
   }

  getCourseList() {
    return [...this._courses];
  }

  resetFilter():CourseData[] {
    return [...this._courses];
  }

  createCourse(course: CourseData): CourseData[] {
    this._courses.push(course);
    return [...this._courses];
  }

  getCourseById(courseId: number): CourseData | undefined {
    return this._courses.find(course => course.id == courseId);
  }

  getCourseByAlias(courseAlias: string): CourseData | undefined {
    return this._courses.find(course => course.alias == courseAlias);
  }

  addCourse(course: CourseData): string {
    course.id = this._createId();
    this._courses.push(course);
    return 'successfully saved';
  }

  updateCourse(course: CourseData): string {
    return 'successfully saved';
  }

  deleteCourse(courseId: number): CourseData[] {
    this._courses = this._courses.filter(course => course.id != courseId);
    return [...this._courses];
  }

  private _createId(): number {
    let id = this._courses.reduce( (previous, current) => {
      if (previous.id !== null && current.id !== null && previous.id > current.id) {
        return previous;
      }
      return current;
    }).id;

    id = id !== null ? id + 1 : 1;

    return id;
  }
}
