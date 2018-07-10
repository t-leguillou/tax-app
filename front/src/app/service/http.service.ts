import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppState, selectAuthState} from '../app.states';
import {Store} from '@ngrx/store';
import * as KeyActions from './../store/actions/action';

@Injectable()
export class HttpService {

  private backendUrl = 'http://localhost:5000'; // put in an env file

  getState: Observable<any>;
  public loginEmitter = new EventEmitter<any>();
  API_KEY;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
    this.getState.subscribe((state) => {
      this.API_KEY = state.API_KEY;
    });

  }

  calculateTax(taxDetail): Observable<any> {
    const url = `${this.backendUrl}/tax`;
    const headers = {headers: new HttpHeaders({'x-secret-token': this.API_KEY})};
    return this.http.post(url, taxDetail, headers);
  }

  login(password) {
    const url = `${this.backendUrl}/login`;
    this.http.post(url, {password: password})
      .subscribe((result) => {
        const API_KEY = result['API_KEY'];
        this.store.dispatch( new KeyActions.AddKey({API_KEY: API_KEY}));
        this.loginEmitter.emit();

      });
  }

  getTaxHistory() {
    const url = `${this.backendUrl}/history`;
    const headers = {headers: new HttpHeaders({'x-secret-token': this.API_KEY})};
    return this.http.get(url, headers);
  }
}
