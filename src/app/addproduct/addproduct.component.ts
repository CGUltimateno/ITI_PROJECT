import { Component } from '@angular/core';
import { ProdserviceService } from '../prodservice.service'; // You need to create this service
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

  export class AddproductComponent {
  product : any = {};

  ngOnInit() {

  }
  constructor(private http:HttpClient,private router: Router) {
  }

  onSubmit(data: {title: string, desc: string, price: number, imgurl: string, categories: string}) {
    try {
      this.http.post(`http://localhost:4000/api/products`, data).subscribe((res) => {
        console.log(res);
        localStorage.setItem('title', this.product.title);
        localStorage.setItem('desc', this.product.desc);
        localStorage.setItem('price', this.product.price.toString());
        localStorage.setItem('imgurl', this.product.imageurl);
        localStorage.setItem('categories', this.product.categories);

        this.router.navigate(['/products']);

      })

      console.log('====================================');
      console.log(data);
      console.log('====================================');
    } catch (error) {
      console.log(error);
  }
}
}
