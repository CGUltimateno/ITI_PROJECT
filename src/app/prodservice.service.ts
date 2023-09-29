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

  AddProduct(data: {title: string, desc: string, price: number, imgurl: string, categories: string}) {
    try {
      this.http.post(`http://localhost:4000/api/products`, data).subscribe((res) => {
        console.log(res);
        localStorage.setItem('title', data.title);
        localStorage.setItem('desc', data.desc);
        localStorage.setItem('price', data.price.toString());
        localStorage.setItem('imgurl', data.imgurl);
        localStorage.setItem('categories', data.categories);
      })
    } catch (error) {
      console.log(error);
    }
  }
}
