import {Component, OnInit} from '@angular/core';
import {ProdserviceService} from "../prodservice.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any[] = [];
  allData: any[] = [];
  private searchval: string = '';

  set searchValue(value: string) {
    this.searchval = value;
    this.searchallProducts(value);
  }

  searchallProducts(title: string) {
    this.prodserviceService.searchAllProducts(title).subscribe({
      next: (response) => {
        this.allProducts = response.products;
        this.allProducts = this.allData;
      },
    });
  }
  constructor(private prodserviceService: ProdserviceService) {}
  ngOnInit() {
    this.prodserviceService.getAllProducts().subscribe({next:(data)=>{
        console.log(data);
        this.allProducts = data.products;
      }})
    // this.listProduct();
  }

  // listProduct() {
  //     this.prodserviceService.getAllProducts().subscribe(
  //         (data) => {
  //             this.allProducts = data;
  //             console.log(data);
  //         },
  //         (err) => {
  //             console.log(err);
  //         }
  //     );
  // }
}
