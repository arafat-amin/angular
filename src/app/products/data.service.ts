import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable ({
  providedIn: 'root'
})

export class DataService {
  // private baseUrl = 'https://api.escuelajs.co/api/v1/products';
  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.baseUrl)
    .pipe(
      map((response: any) => response.products), // Extract products array
    );
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}
