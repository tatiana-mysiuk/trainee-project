import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoComponent ],
      imports: [ MatIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "Video course"', () => {
    expect(component.title).toBe('Video course');
  });

  it('should display title "Video course"', () => {
    let span: HTMLElement = fixture.nativeElement.querySelector('span');
    fixture.detectChanges();
    expect(span.textContent).toContain(component.title);
  });

});
