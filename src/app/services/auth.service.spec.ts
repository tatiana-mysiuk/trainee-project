import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

const mockLoginData = {
  email: '',
  password: ''
}

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true after login', () => {
    service.login(mockLoginData);
    expect(service.isAuthenticated()).toBe(true);
  });

  it('should return user login after login', () => {
    service.login(mockLoginData);
    expect(service.getUserInfo()).toBe('John');
  });

  it('should return null after logout', () => {
    service.logout();
    expect(service.getUserInfo()).toBe(null);
  });

  it('should return false after logout', () => {
    service.logout();
    expect(service.isAuthenticated()).toBe(false);
  });

});
