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
}


}
