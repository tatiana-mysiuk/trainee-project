import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  showUserInfo: boolean = true;
  //private _urlSubscription: Subscription = null;
  private _urlSubscription: any = null;

  constructor(public router: Router) { }

  ngOnInit():void {
    this._urlSubscription = this.router.events.subscribe((event: any) => {
      this.showUserInfo = this.router.url != '/login';
    });
  }

  ngOnDestroy(): void {
    this._urlSubscription.unsubscribe();
  }
}
