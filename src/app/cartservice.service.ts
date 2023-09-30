import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  cartItems: any[] = [];

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  getCartItemCount() {
    return this.cartItems.length;
  }

  removeFromCart(product: any) {
    const index = this.cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

    clearCart() {
    this.cartItems = [];
    }

  constructor() { }
}
