import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPageComponent } from './courses-page.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { CourseService } from '../services/course.service';
import { CourseData } from '../data-models/course-data';
import { MatCardModule } from '@angular/material/card';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  let mockCourseData: CourseData[] = [
    {
      id: 1,
      title: 'Course Name',
      creationDate: new Date(),
      durationMin: 100,
      description: '',
      topRated: false
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesPageComponent,
        OrderByPipe
      ],
      imports: [ MatCardModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        { provide: FilterPipe, useValue: {} },
        CourseService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    const courseService = TestBed.inject(CourseService);
    spyOn(courseService, 'getCourseList').and.returnValue(mockCourseData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
