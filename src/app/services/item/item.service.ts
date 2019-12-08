import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'https://ir-grocery.herokuapp.com/grocery/item';

  constructor(private http: HttpClient) { }


  getItemList(): Observable<any> {
    return this.http.get(this.baseUrl + '/get');
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }

  addItem(item: Item) {
    return this.http.put(this.baseUrl + '/add', item, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }

}
