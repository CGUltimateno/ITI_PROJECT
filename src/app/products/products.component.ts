import {Component, OnInit} from '@angular/core';
import {ProdserviceService} from "../prodservice.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any[] = [];

  constructor(private prodserviceService: ProdserviceService) {}
    ngOnInit() {
        this.listProduct();
    }

    listProduct() {
        this.prodserviceService.getAllProducts().subscribe(
            (data) => {
                this.allProducts = data;
                console.log(data);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
