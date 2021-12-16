import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
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
    this._urlSubscription = this.router.events.pipe(filter( event => event instanceof NavigationEnd )).subscribe(event => {
      this.isAuthenticated = this.authService.isAuthenticated();
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this._urlSubscription.unsubscribe();
  }
}
