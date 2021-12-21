import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public title: string = 'Login';

  constructor(private authService: AuthService) { }

  onLogin(formData: NgForm): void {
    if ( formData.invalid ) return;
    const loginData = {
      login: formData.value.login,
      password: formData.value.password
    }

    this.authService.login(loginData);
  }

}
