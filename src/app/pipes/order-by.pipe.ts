import { Pipe, PipeTransform } from '@angular/core';
import { CourseData } from '../data-models/course-data';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: CourseData[], ): CourseData[] {

    return courses.sort((a, b) => {
      if (a.creationDate < b.creationDate) {
        return -1;
      }
      if (a.creationDate > b.creationDate) {
        return 1;
      }

      return 0;
    });
  }
}
