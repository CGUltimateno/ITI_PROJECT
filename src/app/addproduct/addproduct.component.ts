import { Component } from '@angular/core';
import { ProdserviceService } from '../prodservice.service';
import {NgForm} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent {
  product: any = {};

  ngOnInit() {

  }
  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) { }
  add(data: { title: string, desc: string, imageurl: string, categories: [], price: string }) {
    try {
      this.http.post(`http://localhost:4000/api/products/add`, data).subscribe((res) => {
        console.log(res);


        location.reload();
        window.location.replace('/products');








      })

      console.log('====================================');
      console.log(data);
      console.log('====================================');

    } catch (error) {
      console.log(error);


    }



  }
}
