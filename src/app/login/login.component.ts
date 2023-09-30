import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  constructor(private loginService:LoginService,private http:HttpClient,private router: Router) { }
  ngOnInit(): void {

  }


<<<<<<< HEAD
  login(data: { email: string, password: string, username:string }) {
try {
  this.http.post(`http://localhost:4000/api/auth/login`, data).subscribe((res) => {
      console.log(res);



      localStorage.setItem('email', data.email);
      LoginService.isLoggedIn = true
      localStorage.setItem('logedin',JSON.stringify(  LoginService.isLoggedIn))
      location.reload();
    window.location.replace('/home');


=======
    login(data: { email: string, password: string, username: string }) {
        try {
            this.http.post(`http://localhost:4000/api/auth/login`, data).subscribe((res: any) => {
                console.log(res);
>>>>>>> c277b6f30e6d4508fd1b6ec1c200125da50149c1

                // Store the user's ID after a successful login
                this.loginService.setUserId(res.id);

                localStorage.setItem('email', data.email);
                LoginService.isLoggedIn = true;
                localStorage.setItem('logedin', JSON.stringify(LoginService.isLoggedIn));
                this.loginService.setUserName(data.username);
                location.reload();
                window.location.replace('/home');

                console.log('====================================');
                console.log(LoginService.isLoggedIn, 'from login component');
                console.log('====================================');
            });
        } catch (error) {
            console.log(error);
        }
    }}
