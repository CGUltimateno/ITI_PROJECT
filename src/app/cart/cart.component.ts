import { Component } from '@angular/core';
import {CartserviceService} from "../cartservice.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
constructor(private cartservice: CartserviceService) { }
ngOnInit() {
  this.cartItems = this.cartservice.getCartItems();

}
  removeFromCart(item: any) {
    // Remove the item from the cartItems array
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }


}
