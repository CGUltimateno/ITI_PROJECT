import {Component, OnInit} from '@angular/core';
import {ProdserviceService} from "../prodservice.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: any[] = [];

  constructor(public prodserviceService: ProdserviceService) {
  }
  ngOnInit(): void {
  }

}
