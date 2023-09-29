import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService,private router: Router) { }
  ngOnInit(): void {

  }
  isAuth = localStorage.getItem('logedin')

  logout() {
     localStorage.removeItem("email");
    localStorage.removeItem("logedin");
    location.reload();
window.location.replace('/login');

  }



}
