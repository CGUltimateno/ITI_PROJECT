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

    ngOnInit(): void {
        const loggedInValue = localStorage.getItem('logedin');

        if (loggedInValue !== null) {
            this.isAuth = JSON.parse(loggedInValue);
        } else {
            this.isAuth = false;
        }

        if (this.isAuth) {
            const userId = localStorage.getItem('userId'); // Retrieve MongoDB ID
            console.log('User ID:', userId);

            if (userId) {
                this.loginService.getUser(userId).subscribe(
                    (user) => {
                        console.log('Username:', user.username);
                        this.username = user.username;
                    },
                    (error) => {
                        console.error('Error getting username:', error);
                    }
                );
            }
        }
    }

    logout() {
        localStorage.removeItem("email");
        localStorage.removeItem("logedin");
        localStorage.removeItem('username');
        localStorage.removeItem('userId'); // Remove the MongoDB ID
        location.reload();
        window.location.replace('/login');
    }
}
