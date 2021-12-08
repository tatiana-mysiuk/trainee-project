import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CourseService } from '../../services/course.service';
import { CourseData } from 'src/app/data-models/course-data';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public authorsInput: string = '';
  public course: CourseData = {
    id: 0,
    title: 'New course',
    creationDate: new Date(),
    durationMin: 0,
    description: '',
    topRated: false,
  };

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.keys.length != 0 ) {
        let id = Number( params.get('id') );
        this.course = this.courseService.getCourseById(id);
      }
    });
  }

  onCancel(): void {
    this.location.back();
  }

  onSave() {

  }

}
