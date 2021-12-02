import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'Videocourses';
  showBreadcrumbs: boolean = true;
  //private _urlSubscription: Subscription = null;
  private _urlSubscription: any = null;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this._urlSubscription = this.router.events.subscribe(value => {
      this.showBreadcrumbs = this.router.url != '/login';
    });
  }

  ngOnDestroy(): void {
    this._urlSubscription.unsubscribe();
  }
}
