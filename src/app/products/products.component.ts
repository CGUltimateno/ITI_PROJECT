import {Component, OnInit} from '@angular/core';
import {ProdserviceService} from "../prodservice.service";
import {Router} from "@angular/router";
import {CartserviceService} from "../cartservice.service";
import {LoginService} from "../login.service";

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
      private LoginService: LoginService) {}
  ngOnInit() {
    // Obtain the user ID from the LoginService
    const userId = this.LoginService.userId;

    // Fetch user details and set isAdmin
    this.prodserviceService.getUserDetails(userId).subscribe({
      next: (data) => {
        this.isAdmin = data.isAdmin;
      }
    });

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
  addToCart(product: any) {
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


