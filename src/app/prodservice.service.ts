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

  searchAllProducts(productName: string): Observable<any> {
    if (productName == '') {
      return this.getAllProducts();
    } else {
      return this.http.get(
        `http://localhost:4000/api/products?name=${productName}`
      );
    }
  }
}
