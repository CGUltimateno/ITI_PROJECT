import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 constructor(private http:HttpClient,private router: Router) { }
  register(data: { email: string,username:string, password: string }) {
try {
    this.http.post(`http://localhost:4000/api/auth/register`, data).subscribe((res) => {
      console.log(res);
      localStorage.setItem('email', data.email);

      this.router.navigate(['/login']);




})

    console.log('====================================');
    console.log(data);
  console.log('====================================');
} catch (error) {
  console.log(error);


}


  }

}
