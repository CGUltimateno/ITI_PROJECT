import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<any>{
    return this.http.get<any>('http://localhost:3002/products');
  }

  getProductbyID(id:number):Observable<any> {
    return this.http.get<any>(`http://localhost:3002/products/${id}`);
  }
}

