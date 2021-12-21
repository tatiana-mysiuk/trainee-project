import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthData } from '../data-models/auth-data';
import { UserData } from '../data-models/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userInfo: UserData;
  private _isAuthenticated: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router) { }

  public login(authData: AuthData) {
    this.http.post<{token: string}>('/auth/login', authData)
      .subscribe(response => {
        const token = response.token;
        if (token) {
          this._isAuthenticated = true;
          this._saveAuthData(token);
          this.router.navigate(['courses']);
        }
      });
  }

  public logout() {
    this._isAuthenticated = false;
    this._clearAuthData();
    this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    if ( localStorage.getItem('token') !== null ) {
      this._isAuthenticated = true;
    }
    return this._isAuthenticated;
  }

  public getUserInfo(): Observable<UserData> {
    const token = localStorage.getItem('token');
    return this.http.post<UserData>('/auth/userinfo', {token: token})
    .pipe(
      tap(response => {
        localStorage.setItem('name', response.name.first);
        return response;
      })
    );
  }

  public getToken(): string {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    } else {
      return '';
    }
  }

  private _saveAuthData(token: string): void {
    localStorage.setItem('token', token);
  }

  private _clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }
}
