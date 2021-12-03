import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '../data-models/auth-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | undefined;
  private _isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  public login(authData: AuthData) {
    const token = '1234567890';
    this.token = token;
    this._isAuthenticated = true;
    this._saveAuthData(token, authData.email);
    this.router.navigate(['courses']);
    console.log('logged in successfully');
  }

  public logout() {
    this.token = undefined;
    this._isAuthenticated = false;
    this.router.navigate(['']);
    const userLogin = this.getUserInfo()
    this._clearAuthData();
    console.log(userLogin);
  }

  public isAuthenticated(): boolean {
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
