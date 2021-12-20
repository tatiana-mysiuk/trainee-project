import { CourseData } from "../data-models/course-data";

export const testCourses: CourseData[] = [
  {
    id: 1,
    alias: 'course-name1',
    title: 'Course Name1',
    creationDate: new Date('12/21/2021'),
    durationMin: 100,
    description: '',
    topRated: false
  },
  {
    id: 2,
    alias: 'course-name2',
    title: 'Course Name2',
    creationDate: new Date('12/20/2021'),
    durationMin: 60,
    description: '',
    topRated: false
  }
];

export const testCourse: CourseData = {
  id: 1,
  alias: 'course-name',
  title: 'Course Name',
  creationDate: new Date('12/20/2021'),
  durationMin: 100,
  description: '',
  topRated: true
};

export const newCourse: CourseData = {
  id: null,
  alias: 'course-name',
  title: 'Course Name',
  creationDate: new Date(),
  durationMin: 0,
  description: '',
  topRated: false
};

export const updatedCourse: CourseData = {
  id: 1,
  alias: 'course-name',
  title: 'Updated Course Name',
  creationDate: new Date(),
  durationMin: 0,
  description: '',
  topRated: false
};
