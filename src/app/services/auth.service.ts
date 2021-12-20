import { Injectable } from '@angular/core';

import { AuthData } from '../data-models/auth-data';
import { UserData } from '../data-models/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userInfo: UserData;
  private _isAuthenticated: boolean = false;

  public login(authData: AuthData): boolean {
    const token = '1234567890';
    this.userInfo = {
      id: 1,
      firstName: 'John',
      lastName: 'Smith'
    };

    this._isAuthenticated = true;
    this._saveAuthData(token, this.userInfo.firstName);

    console.log('logged in successfully');
    return this._isAuthenticated;
  }

  public logout(): boolean {
    this._isAuthenticated = false;
    const userLogin = this.getUserInfo()
    this._clearAuthData();
    console.log(userLogin);

    return this._isAuthenticated;
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
