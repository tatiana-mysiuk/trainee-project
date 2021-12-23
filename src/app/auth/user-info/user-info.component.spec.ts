import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from 'src/app/services/auth.service';
import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  let getUserInfoSpy: jasmine.Spy;
  let testUserInfo: string = 'Den';

  beforeEach(async () => {
    const authService = jasmine.createSpyObj('AuthService', ['getUserInfo']);
    getUserInfoSpy = authService.getUserInfo.and.returnValue(testUserInfo);

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule
      ],
      declarations: [ UserInfoComponent ],
      providers: [
        {provide: AuthService, useValue: authService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have userLogin property equal to "Hello, Den"', () => {
    expect(component.userLogin).toBe('Hello, Den');
  });

});
