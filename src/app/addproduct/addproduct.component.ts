import { Component } from '@angular/core';
import { ProdserviceService } from '../prodservice.service'; // You need to create this service

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  product = {
    title: '',
    price: '',
    imageUrl: '',
    description: ''
  };
  constructor(private productservice: ProdserviceService) { }

  onSubmit(){
    this.productservice.AddProduct(this.product).subscribe((data: any) => {
      console.log(data);
    });
    this.product = {
      title: '',
      price: '',
      imageUrl: '',
      description: ''
    }
  }
}
