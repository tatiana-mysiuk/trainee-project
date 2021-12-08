import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CourseDateCreationComponent } from './course-date-creation.component';

describe('CourseDateCreationComponent', () => {
  let component: CourseDateCreationComponent;
  let fixture: ComponentFixture<CourseDateCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDateCreationComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDateCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
