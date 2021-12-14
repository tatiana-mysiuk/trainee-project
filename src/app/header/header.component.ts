import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean = false;
  private _urlSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService ) { }

  ngOnInit():void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this._urlSubscription = this.router.events.subscribe(value => {
      this.isAuthenticated = (this.router.url != '/login') && (this.router.url != '/');
    });
  }

  onLogout() {
    this.authService.logout();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  ngOnDestroy(): void {
    this._urlSubscription.unsubscribe();
  }
}
