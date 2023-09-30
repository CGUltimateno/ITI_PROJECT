import { Component } from '@angular/core';
import {CartserviceService} from "../cartservice.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
  totalCartPrice: number = 0;
constructor(private cartservice: CartserviceService) { }
ngOnInit() {
  this.cartItems = this.cartservice.getCartItems();
  this.calculateTotalPrice();

}
  calculateTotalPrice() {
    this.totalCartPrice = this.cartItems.reduce(
        (total, item) => total + parseFloat(item.price), // Parse price as a float
        0
    );
  }
  removeItemFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotalPrice(); // Calculate the updated total price
    }
  }

}
