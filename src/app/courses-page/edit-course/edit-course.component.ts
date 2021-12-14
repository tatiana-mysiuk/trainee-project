import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    id: null,
    alias: '',
    title: 'New course',
    creationDate: new Date(),
    durationMin: 0,
    description: '',
    topRated: false,
  };
  private _routeParamMap: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._routeParamMap = this.route.paramMap.subscribe(params => {
      if (params.keys.length != 0 ) {
        //let id = Number( params.get('id') );
        let alias = params.get('alias');
        if ( alias !== null) {
          const courseByAlis = this.courseService.getCourseByAlias(alias);
          if ( courseByAlis !== undefined ) {
            this.course = courseByAlis;
            //this.router.navigate(['404']);
          } else {
            this.router.navigate(['404']);
          }
        }
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['courses']);
  }

  onSave(): void {
    let message: string;

    if ( this.course.id === null ) {
      this.course.alias = this._createAlias(this.course.title);
      message = this.courseService.addCourse(this.course);
      this.router.navigate(['courses']);

    } else if ( this.course.id > 0 ) {
      message = this.courseService.updateCourse(this.course);
      this.router.navigate(['courses']);

    } else {
      message = 'Something happened wrong. Try again';
    }

    this.snackBar.open(message, '', {duration: 1000});
  }

  ngOnDestroy(): void {
    this._routeParamMap.unsubscribe();
  }

  private _createAlias(title: string): string {
    return title.toLowerCase().replace(' ', '-');
  }
}
