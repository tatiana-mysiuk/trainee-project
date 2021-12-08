import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public userLogin: string = 'Hello, ';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userLogin += this.authService.getUserInfo();
  }
}
