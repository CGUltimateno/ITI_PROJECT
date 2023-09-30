import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }
  public static isLoggedIn: boolean = false

  getUser(id: string): Observable<any> {
    return this.http.get(`http://localhost:4000/api/users/${id}`);
  }

  setUserName(username: string) {
    localStorage.setItem('username', username);
  }

}
