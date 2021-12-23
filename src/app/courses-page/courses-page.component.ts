import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent {

  constructor(public courseService: CourseService) {}

}
