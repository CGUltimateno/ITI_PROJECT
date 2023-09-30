import {Component, OnInit} from '@angular/core';
import {ProdserviceService} from "../prodservice.service";
import {Router} from "@angular/router";
import {CartserviceService} from "../cartservice.service";
import {LoginService} from "../login.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any[] = [];
  showSuccessmessage: boolean = false;
  isAdmin: boolean = false; // Variable to store isAdmin status
  constructor(
      private prodserviceService: ProdserviceService,
      private router: Router,
      private CartService: CartserviceService,
    private LoginService: LoginService,
    private http: HttpClient,) { }
  Id=localStorage.getItem('userId')

  ngOnInit() {


    // Fetch products
    this.prodserviceService.getAllProducts().subscribe({
      next: (data) => {
        this.allProducts = data.products.map((product: any) => ({
          ...product,
          showSuccessMessage: false,
        }));
      }
    });





  }
  addToCart(product: any,) {
    this.http.post(`http://localhost:4000/api/carts`, this.Id).subscribe((res) => {
      console.log(res);
     })
    this.CartService.addToCart(product);
    product.showSuccessMessage = true;
    setTimeout(() => {
      product.showSuccessMessage = false;
    }, 3000);
  }
  addProduct() {
    this.router.navigate(['/addproduct']);

  }

  deleteProduct() {
    this.router.navigate(['/deleteproduct']);
  }
}


