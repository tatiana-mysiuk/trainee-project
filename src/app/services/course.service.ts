import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CourseData } from '../data-models/course-data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _courses: CourseData[];
  private _coursesAddedSub = new Subject<{courses: CourseData[], message: string}>();
  public coursesAdded = this._coursesAddedSub.asObservable();
  private _courseSub = new Subject<{course: CourseData, message: string}>();
  public course = this._courseSub.asObservable();

  constructor( private http: HttpClient ) { }

  getCourseList(): void {
    this.http.get<CourseData[]>('/courses')
      .subscribe(data => {
        console.log(data);
        this._courses = data;
        this._coursesAddedSub.next({courses: [...data], message: ''});
      });
  }

  resetFilter():CourseData[] {
    return [...this._courses];
  }

  getCourseById(courseId: number): void {
    this.http.get<CourseData>(`/courses/${courseId}`)
      .subscribe({
        next: (data: CourseData) => {
          this._courseSub.next({course: data, message: ''});
        },
        error: err => {
          this._courseSub.next(err.statusText);
        }
      });
    //return this._courses.find(course => course.id == courseId);
  }

  /*getCourseByAlias(courseAlias: string): CourseData | undefined {
    return this._courses.find(course => course.alias == courseAlias);
  }*/

  addCourse(course: CourseData): void {
    this.http.get<CourseData[]>('/courses')
    .subscribe(data => {
      this._courses = data;
      course.id = this._createId();
      this._courses.push(course);
      this._coursesAddedSub.next({courses: [...this._courses], message: 'successfully saved'});
    });
  }

  updateCourse(course: CourseData): void {
    const updatedCourse = course;
    this.http.get<CourseData[]>('/courses')
    .subscribe(data => {
      this._courses = data;
      this._courses = this._courses.filter( course => course.id != updatedCourse.id );
      this._courses.push(updatedCourse);
      this._coursesAddedSub.next({courses: [...this._courses], message: 'successfully updated'});
    });
  }

  deleteCourse(courseId: number): void {
    this.http.get<CourseData[]>('/courses')
    .subscribe(data => {
      this._courses = data;
      this._courses = this._courses.filter( course => course.id != courseId );
      this._coursesAddedSub.next({courses: [...this._courses], message: 'successfully updated'});
    });
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
