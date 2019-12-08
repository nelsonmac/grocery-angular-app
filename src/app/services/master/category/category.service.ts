import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'https://ir-grocery.herokuapp.com/grocery/category';

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<any> {
    return this.http.get(this.baseUrl + '/get');
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/delete/' + id);
  }

  addCategory(category: Category) {
    return this.http.post(this.baseUrl + '/add', category, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }
}
