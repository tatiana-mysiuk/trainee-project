import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'Videocourses';
  public showBreadcrumbs: boolean = false;
  private _urlSubscription: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService ) { }

  ngOnInit(): void {
    this._urlSubscription = this.router.events.pipe(filter( event => event instanceof NavigationEnd )).subscribe(event => {
      this.showBreadcrumbs = (this.router.url != '/login') && (this.router.url != '/') && (this.router.url != '/404');

      if ( this.authService.isAuthenticated() ) {
        if ( this.router.routerState.snapshot.url === '/login' ) {
          this.router.navigate(['courses']);

        } else {
          this.router.navigate([this.router.routerState.snapshot.url]);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this._urlSubscription.unsubscribe();
  }
}
