import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: string = 'Login';
  enteredEmail: string = '';
  enteredPassword: string = '';

  constructor() { }

  ngOnInit() {
    return;
  }

  onLogin() {
    console.log('login')
  }
}
