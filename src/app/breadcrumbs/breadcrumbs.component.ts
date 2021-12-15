import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export interface Breadcrumb{
  itemLabel: string;
    itemUrl: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [
    {
      itemLabel: 'Courses',
      itemUrl: '/courses'
    }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      //this.breadcrumbs = this.createBreadcrumbs(this.route.root);
    });
  }

  private createBreadcrumbs(route: ActivatedRoute): Breadcrumb[] {
    let breadcrumbs: Breadcrumb[];
    let children: ActivatedRoute[] = route.children;
    console.log(route);
    console.log(route.children);

    for (let child of children) {
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
      console.log(routeURL);
    }

    breadcrumbs =  this.breadcrumbs;
    return breadcrumbs;
  }



}




