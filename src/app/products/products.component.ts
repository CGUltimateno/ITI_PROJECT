import {Component, OnInit} from '@angular/core';
import {ProdserviceService} from "../prodservice.service";
import {Router} from "@angular/router";
import {CartserviceService} from "../cartservice.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any[] = [];
  constructor(private prodserviceService: ProdserviceService, private router: Router, private CartService: CartserviceService) {}
  ngOnInit() {
    this.prodserviceService.getAllProducts().subscribe({next:(data)=>{
        console.log(data);
        this.allProducts = data.products;
      }})
  }
  addToCart(product: any) {
    this.CartService.addToCart(product);
  }
  addProduct() {
    this.router.navigate(['/addproduct']);

  }
  deleteProduct() {
    this.router.navigate(['/deleteproduct']);
  }
}
