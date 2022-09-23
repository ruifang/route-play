import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultResolver implements Resolve<boolean> {

  constructor(private router:Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('resolving');
    console.log(this.router.getCurrentNavigation()?.extras);
    return of(true);
  }
}
