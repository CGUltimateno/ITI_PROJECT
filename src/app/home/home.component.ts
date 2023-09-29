import { Component } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private loginService: LoginService,private router: Router)
  {
    this.router.navigate(['/home']);
    this.reloadPage()
  }

  isAuth = localStorage.getItem('logedin')
  reloadPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }



  }






