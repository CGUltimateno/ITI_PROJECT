import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ProductsComponent} from "./products/products.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AddproductComponent} from "./addproduct/addproduct.component";
import {DeleteproductComponent} from "./deleteproduct/deleteproduct.component";
import {CartComponent} from "./cart/cart.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path: 'products', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'addproduct', component: AddproductComponent},
  {path: 'deleteproduct', component: DeleteproductComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
