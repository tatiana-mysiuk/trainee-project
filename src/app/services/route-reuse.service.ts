import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable()
export class RouteReuseService implements RouteReuseStrategy {
  private handlers: { [key: string]: DetachedRouteHandle } = {};

  constructor() { }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if ( !route.routeConfig ) {
      return false;
    }
    let shouldReuse = false;
    if (route.routeConfig.data) {
      route.routeConfig.data['reuse'] ? shouldReuse = true : shouldReuse = false;
    }
    return shouldReuse;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    if (handle) {
      this.handlers[this.getKey(route)] = handle;
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.handlers[this.getKey(route)];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if ( !route.routeConfig ) {
      return null;
    }
    return this.handlers[this.getKey(route)];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

  getKey(route: ActivatedRouteSnapshot): string {
    let keyPath: string;
    if (route.data['keyPath']) {
      keyPath = route.data['keyPath'];
    } else {
      keyPath = '-';
    }
    console.log(keyPath, this.handlers)
    return keyPath;
  }
}
