import {Component} from '@angular/core';
import {HttpService} from '../../service/http.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['.container { justify-content: center;padding: 40px;} .title {text-align:center}']
})
export class LoginComponent {
  error;
  passwordControl = new FormControl('', [
    Validators.required,
  ]);
  form = new FormGroup({
    'password': this.passwordControl,
  });

  constructor(private httpService: HttpService, private router: Router) {
  }

  public login() {
    this.httpService.loginEmitter
      .subscribe(() => {
      this.router.navigate(['history']);
    }, error => {
        this.error = error.error;
      })
      ;
    this.httpService.login(this.form.value.password);
  }

}
