import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CourseDurationComponent } from './course-duration.component';
import { DurationPipe } from 'src/app/pipes/duration.pipe';

describe('CourseDurationComponent', () => {
  let component: CourseDurationComponent;
  let fixture: ComponentFixture<CourseDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CourseDurationComponent,
        DurationPipe
      ],
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
    fixture = TestBed.createComponent(CourseDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert duration input "100" to "1h 40min" format', () => {
    const hostElement: HTMLElement = fixture.nativeElement;
    const durationInput: HTMLInputElement = hostElement.querySelector('input')!;
    const durationSpan: HTMLElement = hostElement.querySelector('.course-duration')!;

    durationInput.value = '100';
    durationInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(durationSpan.textContent).toBe('1h 40min');
  });

});
