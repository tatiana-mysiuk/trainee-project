import { Pipe, PipeTransform } from '@angular/core';
import { CourseData } from '../data-models/course-data';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: CourseData[], key: string): CourseData[] {
    return courses.filter( course => course.title.toLowerCase().includes(key.toLowerCase()) );
  }
}
