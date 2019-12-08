import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Uom } from '../models/uom';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  private baseUrl = 'https://ir-grocery.herokuapp.com/grocery/uom'

  constructor(private http: HttpClient) { }

  getUomList(): Observable<any> {
    return this.http.get(this.baseUrl + '/get');
  }

  deleteUom(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }

  addUom(uom: Uom) {
    return this.http.post(this.baseUrl + '/add', uom, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }
}
