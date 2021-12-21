import { Pipe, PipeTransform } from '@angular/core';
import { CourseData } from '../data-models/course-data';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: CourseData[], ): CourseData[] {

    return courses.sort((a, b) => {
      if ( new Date(a.date) > new Date(b.date) ) {
        return -1;
      }
      if ( new Date(a.date) < new Date(b.date) ) {
        return 1;
      }

      return 0;
    });
  }
}
