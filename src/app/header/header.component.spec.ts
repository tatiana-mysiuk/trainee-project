import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header.component';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';

const mockRouter = {
  navigate: jasmine.createSpyObj('Router', ['navigate']),
  events: new Subject<any>()
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [ HeaderComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        { provide: Router, useValue: mockRouter },
        AuthService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    spyOn(authService, 'logout').and.returnValue(false);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
