import { Component } from '@angular/core';
import {HttpService} from '../../service/http.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  error;
  API_KEY;

  constructor(private httpService: HttpService, private router: Router) {
  }

  public login() {
    this.httpService.loginEmitter.subscribe(() => {
      console.log('AUTHENTICATED');
      this.router.navigate(['tax']);

    });
    this.httpService.login(this.API_KEY);
  }

}
