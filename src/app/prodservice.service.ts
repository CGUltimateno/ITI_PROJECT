import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {
  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:4200';
  getAllProducts(): Observable<any> {
    return this.http.get(`${this.API_URI}/products`);
  }

  getProductbyID(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:4200/products/${id}`);
  }
}
