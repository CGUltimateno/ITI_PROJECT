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
  private userName: string | null = null;

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName(): string | null {
    return this.userName;
  }




}
