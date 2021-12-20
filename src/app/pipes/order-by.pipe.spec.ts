import { CourseData } from '../data-models/course-data';
import { OrderByPipe } from './order-by.pipe';
import * as testData from '../test-data/test-courses';

describe('OrderByPipe', () => {

  const mockCourses: CourseData[] = testData.testCourses;
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort courses by creationDate property', () => {
    expect(pipe.transform(mockCourses)[0].creationDate).toEqual(new Date('12/20/2021'));
  });

});
