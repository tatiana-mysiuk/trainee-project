import { TestBed } from '@angular/core/testing';

import { CourseData } from '../data-models/course-data';
import { CourseService } from './course.service';
import * as testData from '../test-data/test-courses';

const mockCourseToAdd: CourseData = testData.newCourse;
const mockCourseToUpdate: CourseData = testData.updatedCourse;

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of courses', () => {
    expect(service.getCourseList().length).toBe(3);
  });

  it('should return an array of all courses', () => {
    expect(service.resetFilter().length).toBe(3);
  });

  it('should return course with given id', () => {
    expect(service.getCourseById(1)?.id).toBe(1);
  });

  it('should return course with given alias', () => {
    expect(service.getCourseByAlias('name-tag1')?.alias).toBe('name-tag1');
  });

  it('should return undefined if no alias is found', () => {
    expect(service.getCourseByAlias('unknown-alias')?.alias).toBe(undefined);
  });

  it('should add course to courses array', () => {
    expect(service.addCourse(mockCourseToAdd)).toBe('successfully saved');
  });

  it('should the length of courses array increase after adding a course', () => {
    service.addCourse(mockCourseToAdd);
    expect(service.getCourseList().length).toBe(4);
  });

  it('should update the course with the given id', () => {
    service.updateCourse(mockCourseToUpdate);
    expect(service.getCourseById(1)?.title).toBe('Updated Course Name');
  });

  it('should delete the course with the given id', () => {
    service.deleteCourse(1);
    expect(service.getCourseById(1)).toBe(undefined);
  });

});
