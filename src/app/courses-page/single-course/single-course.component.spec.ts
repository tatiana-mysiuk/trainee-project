import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';
import { By } from '@angular/platform-browser';

import { SingleCourseComponent } from './single-course.component';
import { DurationPipe } from './../../pipes/duration.pipe';
import { SetBorderDirective } from 'src/app/directives/set-border.directive';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CourseData } from 'src/app/data-models/course-data';
import * as testData from '../../test-data/test-courses';

class MatDialogMock {
  open() {
    return { afterClosed: () => of(true) }
  }
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[routerLink]',
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
class FakeRouterLink {
  @Input() routerLink = '';

  constructor(private router: Router) {}

  @HostListener('click')
  onClick() {
    this.router.navigateByUrl(this.routerLink);
  }
}

describe('SingleCourseComponent', () => {
  let component: SingleCourseComponent;
  let fixture: ComponentFixture<SingleCourseComponent>;
  let dialog: MatDialog;
  const testCourse: CourseData = testData.testCourse;
  let testNumber: number = 1;
  let routerSpy:jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [
        SingleCourseComponent,
        DurationPipe,
        SetBorderDirective,
        ConfirmationDialogComponent,
        FakeRouterLink
      ],
      imports: [
        MatDialogModule,
        MatIconModule,
        MatCardModule
      ],
      providers: [
        { provide: MatDialog, useClass: MatDialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {}},
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCourseComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);

    component.courseData = testCourse;
    component.courseNumber = testNumber;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display piped course duration', () => {
    const spanDebug = fixture.debugElement.query(By.css('.preheader span:first-child'));
    const spanElement = spanDebug.nativeElement;
    expect(spanElement.textContent).toContain('1h 40min');
  });

  it('should raise courseDeleted event when delete button clicked', () => {
    let courseId: number | undefined;
    const buttonDebug = fixture.debugElement.query(By.css('button'));

    component.courseDeleted.pipe(first()).subscribe((id: number) => courseId = id);
    buttonDebug.triggerEventHandler('click', null);
    expect(courseId).toBe(1);
  });

  it('navigates to edit course when edit button is clicked', fakeAsync(() => {
    const expectedPath  = '/courses/' + component.courseData.alias;
    const courseLink = fixture.debugElement.query(By.css('.toolbar a'));

    courseLink.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();

    const [currentPath] = routerSpy.navigateByUrl.calls.first().args;
    console.log(expectedPath,currentPath)

    expect(currentPath).toEqual(expectedPath);
  }));

});
