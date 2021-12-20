import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { CourseListComponent } from './course-list.component';
import { CourseData } from '../../data-models/course-data';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { CourseService } from '../../services/course.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SearchComponent } from '../search/search.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SingleCourseComponent } from '../single-course/single-course.component';
import * as testData from '../../test-data/test-courses';
import { DurationPipe } from '../../pipes/duration.pipe';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let mockCourses: CourseData[] = testData.testCourses;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CourseListComponent,
        SingleCourseComponent,
        SearchComponent,
        PaginationComponent,
        OrderByPipe,
        DurationPipe
      ],
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatDialogModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        { provide: FilterPipe, useValue: {} },
        CourseService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    const courseService = TestBed.inject(CourseService);
    spyOn(courseService, 'getCourseList').and.returnValue(mockCourses);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list of courses from service', () => {
    expect(component.courses.length).toBe(2);
  });
});
