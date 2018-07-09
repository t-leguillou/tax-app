import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

  private backendUrl = 'http://localhost:5000'; // put in an env file

  public loginEmitter = new EventEmitter<any>();
  headers;

  constructor(private http: HttpClient) {
  }

  calculateTax(taxDetail): Observable<any> {
    const url = `${this.backendUrl}/tax`;
    return this.http.post(url, taxDetail, {headers: this.headers});
  }

  login(password) {
    const url = `${this.backendUrl}/login`;
    this.http.post(url, {password: password})
      .subscribe((result) => {
        const API_KEY = result['API_KEY'];
        this.headers = new HttpHeaders({'x-secret-token': API_KEY});
        this.loginEmitter.emit();
      }, error => {
        console.error('WRONG LOGIN');
      });
  }

  getTaxHistory() {
    const url = `${this.backendUrl}/history`;
    return this.http.get(url, {headers: this.headers});
  }
}
