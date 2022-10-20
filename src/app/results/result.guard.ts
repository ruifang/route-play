import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppService } from '../app.service';

@Injectable()
export class ResultGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad, CanMatch {
  constructor(private service: AppService) {
    console.log('result guard ctor-----------------------------------------------');
  }
  canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    console.log('matching', route.path);

    return this.service.getCurrentResult().pipe(
      map((result) => {
        const type = route.data?.['type'] || '';
        const canMatch = type === result;
        console.log(`${type} page matches target (${result}): ${canMatch}`);
        return canMatch;
      })
    );
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('detecting can activate');
    const type = route.data?.['type'] || '';
    const canActivate = type === this.service.resultPage;
    console.log('can activate: ', canActivate);
    return canActivate;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const type = route.data?.['type'] || '';
    const canLoad = type === this.service.resultPage;
    console.log('can load: ', canLoad);
    return canLoad;
  }
}
