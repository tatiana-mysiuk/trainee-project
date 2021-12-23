import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
  private _loadingSub = new BehaviorSubject<boolean>(true);
  public isLoading$ = this._loadingSub.asObservable();

  constructor( private http: HttpClient ) { }

  getCourseList(pageSize: number, startFrom: number): void {
    let message: string = '';
    this._loadingSub.next(true);
    this.http.get<CourseData[]>('/courses', {
      params: new HttpParams()
        .set('start', startFrom.toString())
        .set('count', pageSize.toString())
        .set('sort', 'date')

    }).subscribe(data => {
      if (this._courses == undefined) {
        this._courses = data;
      } else {
        this._courses = [...this._courses, ...data];
      }
      if (data.length == 0) {
        message = 'uploaded';
      }

      this._coursesAddedSub.next({courses: [...this._courses], message: message});
      setTimeout(() => { //just to see - spinner is working
        this._loadingSub.next(false);
      }, 1000);
    });
  }

  getFilteredList(searchRequest: string): void {
    this._loadingSub.next(true);
    this.http.get<CourseData[]>('/courses', {
      params: new HttpParams()
        .set('textFragment', searchRequest)
        .set('sort', 'date')
    }).subscribe(data => {
      this._coursesAddedSub.next({courses: [...data], message: 'search'});
      this._loadingSub.next(false);
    });
  }

  resetFilter():CourseData[] {
    return [...this._courses];
  }

  getCourseById(courseId: number): void {
    this._loadingSub.next(true);
    this.http.get<CourseData>(`/courses/${courseId}`)
      .subscribe({
        next: (data: CourseData) => {
          this._courseSub.next({course: data, message: ''});
          this._loadingSub.next(false);
        },
        error: err => {
          this._courseSub.next(err.statusText);
          this._loadingSub.next(false);
        }
      });
    //return this._courses.find(course => course.id == courseId);
  }

  /*getCourseByAlias(courseAlias: string): CourseData | undefined {
    return this._courses.find(course => course.alias == courseAlias);
  }*/

  addCourse(course: CourseData): void {
    this._loadingSub.next(true);
    this.http.get<CourseData[]>('/courses')
    .subscribe(data => {
      course.id = this._createId(data);
      if (this._courses == undefined) {
        this._courses = data;
      }
      this._courses.push(course);
      this._coursesAddedSub.next({courses: [...this._courses], message: 'successfully saved'});
      this._loadingSub.next(false);
    });
  }

  updateCourse(course: CourseData): void {
    this._loadingSub.next(true);
    const updatedCourse = course;
    this.http.get<CourseData[]>('/courses')
    .subscribe(data => {
      if (this._courses == undefined) {
        this._courses = data;
      }
      this._courses = this._courses.filter( course => course.id != updatedCourse.id );
      this._courses.push(updatedCourse);
      this._coursesAddedSub.next({courses: [...this._courses], message: 'successfully updated'});
      this._loadingSub.next(false);
    });
  }

  deleteCourse(courseId: number): void {
    this._loadingSub.next(true);
    this.http.get<CourseData[]>('/courses')
    .subscribe(data => {
      //this._courses = data;
      this._courses = this._courses.filter( course => course.id != courseId );
      this._coursesAddedSub.next({courses: [...this._courses], message: 'successfully updated'});
      this._loadingSub.next(false);
    });
  }

  private _createId(allCourses: CourseData[]): number {
    let id = allCourses.reduce( (previous, current) => {
      if (previous.id !== null && current.id !== null && previous.id > current.id) {
        return previous;
      }
      return current;
    }).id;

    id = id !== null ? id + 1 : 1;

    return id;
  }
}
