import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'Videocourses';
  public isAuthenticated: boolean = false;
  private _urlSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this._urlSubscription = this.router.events.subscribe(value => {
      this.isAuthenticated = (this.router.url != '/login') && (this.router.url != '/');
    });
  }

  ngOnDestroy(): void {
    this._urlSubscription.unsubscribe();
  }
}
