import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {
  constructor(private http: HttpClient) { }

   // API_URI = 'http://localhost:4000';
  getAllProducts(): Observable<any> {
    return this.http.get(`http://localhost:4000/api/products`);
  }

  AddProduct(product: any): Observable<any> {
    return this.http.post(`http://localhost:4000/api/products`, product);
  }
}
