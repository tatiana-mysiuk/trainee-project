import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CourseService } from '../../services/course.service';
import { CourseData } from 'src/app/data-models/course-data';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCourseComponent implements OnInit, OnDestroy {
  public authorsInput: string = '';
  public course: CourseData = {
    id: null,
    //alias: '',
    name: 'New course',
    date: new Date().toString(),
    length: 0,
    description: '',
    authors: {
      id: 0,
      name: ''
    },
    isTopRated: false,
  };
  private routeParamMap$: Subscription;
  private course$: Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.routeParamMap$ = this.route.paramMap.subscribe(params => {
      if (params.keys.length != 0 ) {
        let id = Number( params.get('id') );
        //let alias = params.get('alias');
        if ( id !== null) {
          this.courseService.getCourseById(id);
          this.course$ = this.courseService.course.subscribe(data => {
            if (data.course) {
              this.course = data.course;
              this.ref.markForCheck();
            } else {
              this.router.navigate(['404']);
            }
          });
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
      //this.course.alias = this._createAlias(this.course.title);
      this.courseService.addCourse(this.course);
      this.router.navigate(['courses']);

    } else if ( this.course.id > 0 ) {
      this.courseService.updateCourse(this.course);
      this.router.navigate(['courses']);

    } else {
      message = 'Something happened wrong. Try again';
      this.snackBar.open(message, '', {duration: 1000});
    }
  }

  ngOnDestroy(): void {
    this.routeParamMap$.unsubscribe();
    if (this.course$ !== undefined) {
      this.course$.unsubscribe();
    }
  }

  private _createAlias(title: string): string {
    return title.toLowerCase().replace(' ', '-');
  }
}
