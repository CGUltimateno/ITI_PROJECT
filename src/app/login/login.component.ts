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


  // user :Object= { _id: '', username:'', email: '',accessToken:"",createdAt:'',isAdmin:"",updatedAt:"",__v:""}
  user:any = {}
  login(data: { email: string, password: string, username:string }) {
try {
  this.http.post(`http://localhost:4000/api/auth/login`, data).subscribe((res) => {
      console.log(res);
this.user=res
const _id=((this.user._id));

      localStorage.setItem('email', data.email);
      LoginService.isLoggedIn = true
      localStorage.setItem('logedin',JSON.stringify(  LoginService.isLoggedIn))
      location.reload();
    window.location.replace('/home');
    this.loginService.setUserId((_id))
    this.loginService.setUserName((this.user.username))



                console.log('====================================');
                console.log(LoginService.isLoggedIn, 'from login component');
                console.log('====================================');
            });
        } catch (error) {
            console.log(error);
        }
    }}
