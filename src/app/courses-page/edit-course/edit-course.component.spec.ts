import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthorsComponent } from './authors/authors.component';
import { CourseDateCreationComponent } from './course-date-creation/course-date-creation.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { EditCourseComponent } from './edit-course.component';
import { MatCardModule } from '@angular/material/card';

describe('EditCourseComponent', () => {
  let component: EditCourseComponent;
  let fixture: ComponentFixture<EditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EditCourseComponent,
        CourseDurationComponent,
        CourseDateCreationComponent,
        AuthorsComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
      ],
      //schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
