import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SingleCourseComponent } from './single-course.component';
import { DurationPipe } from './../../pipes/duration.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

describe('SingleCourseComponent', () => {
  let component: SingleCourseComponent;
  let fixture: ComponentFixture<SingleCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SingleCourseComponent,
        DurationPipe
      ],
      imports: [
        MatDialogModule,
        MatIconModule,
        MatCardModule
      ],
      providers: [
        MatDialog,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {courseName: 'Course name'}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
