import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  calculateTax(taxDetail): Observable<any> {
    const url = 'http://localhost:5000/tax';
    return this.http.post(url, taxDetail);
  }
}
