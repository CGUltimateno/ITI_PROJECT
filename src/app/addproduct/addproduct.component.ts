import { Component } from '@angular/core';
import { ProdserviceService } from '../prodservice.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

  export class AddproductComponent {
  product : any = {};

  ngOnInit() {

  }
  constructor(private prodserviceService: ProdserviceService){}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.prodserviceService.AddProduct(this.product);
      form.resetForm();
    }
  }

  }
