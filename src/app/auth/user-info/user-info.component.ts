import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  public userLogin: string = 'Hello, ';
  private useInfo$: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.useInfo$ = this.authService.getUserInfo().subscribe(data => {
      if ( data.name ) {
        this.userLogin += data.name.first;
      }
    })
  }

  ngOnDestroy(): void {
    this.useInfo$.unsubscribe();
  }
}
