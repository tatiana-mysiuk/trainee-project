import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public title: string = 'Login';
  public emailInput: string = '';
  public passwordInput: string = '';

  constructor(private authService: AuthService) { }

  onLogin() {
    const loginData = {
      "email": this.emailInput,
      "password": this.passwordInput
    }
    this.authService.login(loginData);
  }
}
