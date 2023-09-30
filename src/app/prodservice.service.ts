import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdserviceService {
  constructor(private http: HttpClient) { }

  // API_URI = 'http://localhost:4000';

  getAllProducts(): Observable<any> {
    return this.http.get(`http://localhost:4000/api/products`);
  }

  // Add a method to fetch user details
  getUserDetails(userId: string): Observable<any> {
    // Replace with the actual API endpoint to fetch user details by ID
    return this.http.get(`http://localhost:4000/api/users/${userId}`);
  }

  // Add a method to fetch all users
  getAllUsers(newUsers: boolean): Observable<any> {
    // Replace with the actual API endpoint to fetch all users with a query parameter for new users
    return this.http.get(`http://localhost:4000/api/users?new=${newUsers}`);
  }
}
