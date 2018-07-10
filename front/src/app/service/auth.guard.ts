import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HttpService} from './http.service';
import {AppState, selectAuthState} from '../app.states';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  getState: Observable<any>;
  API_KEY;

  constructor(private myRoute: Router, private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
    this.getState.subscribe((state) => {
      this.API_KEY = state.API_KEY;
    });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.API_KEY) {
      return true;
    } else {
      this.myRoute.navigate(['login']);
      return false;
    }
  }
}
