import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private loginService:LoginService,private http:HttpClient,private router: Router) { }


  login(data: { email: string, password: string }) {
try {
    this.http.post(`http://localhost:4000/api/auth/login`, data).subscribe((res) => {
      console.log(res);
      localStorage.setItem('email', data.email);
    LoginService.isLoggedIn=true
      this.router.navigate(['/home']);
      console.log('====================================');
      console.log(LoginService.isLoggedIn,'from login component');
      console.log('====================================');



})

    console.log('====================================');
    console.log(data);
  console.log('====================================');
} catch (error) {
  console.log(error);


}


  }


}