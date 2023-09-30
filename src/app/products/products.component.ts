import {Component, OnInit} from '@angular/core';
import {ProdserviceService} from "../prodservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any[] = [];
  constructor(private prodserviceService: ProdserviceService, private router: Router) {}
  ngOnInit() {
    this.prodserviceService.getAllProducts().subscribe({next:(data)=>{
        console.log(data);
        this.allProducts = data.products;
      }})
  }
  addProduct() {
    this.router.navigate(['/addproduct']);

  }
  deleteProduct() {
    this.router.navigate(['/deleteproduct']);
  }
}
