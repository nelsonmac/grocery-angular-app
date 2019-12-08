import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from 'src/app/models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private baseUrl = 'https://ir-grocery.herokuapp.com/grocery/currency';


  constructor(private http: HttpClient) { }

  getCurrencyList(): Observable<any> {
    return this.http.get(this.baseUrl + '/get');
  }

  deleteCurrency(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }

  addCurrency(currency: Currency) {
    return this.http.post(this.baseUrl + '/add', currency, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

}
