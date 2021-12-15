import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { CourseService } from '../../services/course.service';
import { CourseData } from 'src/app/data-models/course-data';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit, OnDestroy {
  public authorsInput: string = '';
  public course: CourseData = {
    id: 0,
    title: 'New course',
    creationDate: new Date(),
    durationMin: 0,
    description: '',
    topRated: false,
  };
  private _routeParamMap: Subscription;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this._routeParamMap = this.route.paramMap.subscribe(params => {
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

  ngOnDestroy(): void {
    this._routeParamMap.unsubscribe();
  }
}
