import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

export interface Breadcrumb{
  itemLabel: string;
  itemUrl: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public breadcrumbs: Breadcrumb[];
  private urlSubscription$: Subscription;

  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.breadcrumbs = this._createBreadcrumbs(this.router.routerState.snapshot.url);

    this.urlSubscription$ = this.router.events.pipe(filter( event => event instanceof NavigationEnd) ).subscribe(event => {
      this.breadcrumbs = this._createBreadcrumbs(this.router.routerState.snapshot.url);
    });
  }

  private _createBreadcrumbs(currentUrl: string): Breadcrumb[] {
    let breadcrumbs: Breadcrumb[] = [];

    currentUrl.split('/').forEach(item => {
      if ( item !== '' ) {
        let itemLabel = (item[0].toUpperCase() + item.slice(1)).replace('-', ' ');
        breadcrumbs.push({
          itemLabel: itemLabel,
          itemUrl: `/${item}`
        })
      }
    });

    return breadcrumbs;
  }

  ngOnDestroy(): void {
    this.urlSubscription$.unsubscribe();
  }
}
