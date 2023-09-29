import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
=======
import {FormsModule} from "@angular/forms";
>>>>>>> 07e94f4c25459db750b75be243c306a699c1cf6a
=======
import {FormsModule} from "@angular/forms";
>>>>>>> 07e94f4c25459db750b75be243c306a699c1cf6a

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent
  ],
<<<<<<< HEAD
<<<<<<< HEAD
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
=======
=======
>>>>>>> 07e94f4c25459db750b75be243c306a699c1cf6a
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
<<<<<<< HEAD
>>>>>>> 07e94f4c25459db750b75be243c306a699c1cf6a
=======
>>>>>>> 07e94f4c25459db750b75be243c306a699c1cf6a
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
