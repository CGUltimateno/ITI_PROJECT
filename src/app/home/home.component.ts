import { Component } from '@angular/core';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAuth:boolean=false
  constructor() {
    this.isAuth = LoginService.isLoggedIn
  console.log('====================================');
  console.log(this.isAuth, 'from nav');
  console.log('====================================');}





}
