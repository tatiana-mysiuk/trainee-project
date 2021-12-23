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
  private urlSubscription$: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService ) { }

  ngOnInit():void {
    this.urlSubscription$ = this.router.events.pipe(filter( event => event instanceof NavigationEnd )).subscribe(event => {
      this.authService.isAuthenticated().subscribe((value: boolean) => {
        this.isAuthenticated = value
      })
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.urlSubscription$.unsubscribe();
  }
}
