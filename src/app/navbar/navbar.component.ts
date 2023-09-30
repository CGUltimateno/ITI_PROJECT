import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    username: any;
    isAuth: boolean = false;

    constructor(private loginService: LoginService, private router: Router) { }

  constructor(private loginService:LoginService,private router: Router) { }
  ngOnInit(): void {

  }
  isAuth = localStorage.getItem('logedin')
  get userName(): string | null {
    return this.loginService.getUserName();
  }
  logout() {
     localStorage.removeItem("email");
    localStorage.removeItem("logedin");
    localStorage.removeItem('username');
    location.reload();
    window.location.replace('/login');

  }



}
