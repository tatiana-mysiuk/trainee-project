import { CourseData } from '../data-models/course-data';
import { FilterPipe } from './filter.pipe';
import * as testData from '../test-data/test-courses';

describe('FilterPipe', () => {
  const mockCourses: CourseData[] = testData.testCourses;
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filter courses by title according to the request', () => {
    expect(pipe.transform(mockCourses, "Course Name1").length).toBe(1);
  });

});
