import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor() { }
  isAuth: boolean = LoginService.isLoggedIn






}
