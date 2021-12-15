import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';

import { CourseListComponent } from './course-list.component';
import { CourseData } from '../../data-models/course-data';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { CourseService } from '../../services/course.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SearchComponent } from '../search/search.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SingleCourseComponent } from '../single-course/single-course.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  let mockCourseData: CourseData[] = [
    {
      id: 1,
      alias: 'course-name',
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
        CourseListComponent,
        SingleCourseComponent,
        SearchComponent,
        PaginationComponent,
        OrderByPipe
      ],
      imports: [
        RouterTestingModule,
        MatCardModule
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
    spyOn(courseService, 'getCourseList').and.returnValue(mockCourseData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
