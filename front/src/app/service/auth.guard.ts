import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HttpService} from './http.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private httpService: HttpService, private myRoute: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.httpService.headers) {
      return true;
    } else {
      this.myRoute.navigate(['login']);
      return false;
    }
  }
}
