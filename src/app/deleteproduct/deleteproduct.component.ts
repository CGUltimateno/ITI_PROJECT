import { Component, OnInit } from '@angular/core';
import { ProdserviceService } from "../prodservice.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  products: any[] = [];
  selectedProductId: string | undefined;

  constructor(private prodservice: ProdserviceService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.prodservice.getAllProducts().subscribe({
      next: (data) => {
        this.products = data.products;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  deleteProduct() {
    if (!this.selectedProductId) {
      console.error('No product selected.');
      return;
    }

    try {
      this.http.delete(`http://localhost:4000/api/products/${this.selectedProductId}`).subscribe((res) => {
        console.log('Product deleted successfully:', res);
        this.ngOnInit();
        location.reload();
        window.location.replace('/products');
      });
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
  goBack() {
    this.router.navigate(['/products']);
  }
}
