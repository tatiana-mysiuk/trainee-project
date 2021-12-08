import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public title: string = 'Login';
  public emailInput: string;
  public passwordInput: string;
  public invalidEmail: boolean = false;
  public invalidPassword: boolean = false;

  constructor(private authService: AuthService) { }

  onLogin(): void {
    this.invalidEmail = this.emailInput === undefined || this.emailInput.length < 0;
    this.invalidPassword = this.passwordInput === undefined || this.passwordInput.length < 0;

    if ( this.invalidEmail || this.invalidPassword ) return;
    const loginData = {
      email: this.emailInput,
      password: this.passwordInput
    }

    this.authService.login(loginData);
  }

}
