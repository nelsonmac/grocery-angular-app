import { Ph } from './../../models/ph';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhService {

  list$: BehaviorSubject<Ph[]> = new BehaviorSubject([]);

  private baseUrl = 'https://ir-grocery.herokuapp.com/grocery/ph';


  constructor(private http: HttpClient) { }

  getPhList(): Observable<any> {
    return this.http.get(this.baseUrl + '/get');
  }

  deletePh(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }

  addPh(ph: Ph) {
    return this.http.put(this.baseUrl + '/add', ph, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

  refreshList() {
    return this.http.get(this.baseUrl + '/get').toPromise().then(res => this.list$.next(res as Ph[]));
  }
}
