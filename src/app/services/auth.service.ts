import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '../data-models/auth-data';
import { UserData } from '../data-models/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userInfo: UserData;
  private _isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  public login(authData: AuthData) {
    const token = '1234567890';
    this.userInfo = {
      id: 1,
      firstName: 'John',
      lastName: 'Smith'
    };

    this._isAuthenticated = true;
    this._saveAuthData(token, this.userInfo.firstName);
    this.router.navigate(['courses']);
    console.log('logged in successfully');
  }

  public logout() {
    this._isAuthenticated = false;
    this.router.navigate(['']);
    const userLogin = this.getUserInfo()
    this._clearAuthData();
    console.log(userLogin);
  }

  public isAuthenticated(): boolean {
    if ( localStorage.getItem('login') !== null ) {
      this._isAuthenticated = true;
    }
    return this._isAuthenticated;
  }

  public getUserInfo(): string | null {
    const userLogin = localStorage.getItem('login');
    return userLogin;
  }

  private _saveAuthData(token: string, login: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('login', login);
  }

  private _clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('login');
  }
}
