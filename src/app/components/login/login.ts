import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  credentials = {
	login: '',
	password: ''
  };
  loginError = false;
 
  constructor(
	private authService: AuthService,
	private router: Router
  ) { }
 
  signIn() {
	this.loginError = false;
    this.authService.authenticate(this.credentials).subscribe({
  	next: (result) => {
    	if (result) {
      	this.router.navigate(['/']);
    	} else {
      	this.loginError = true;
    	}
  	},
  	error: () => {
    	this.loginError = true;
  	}
	});
  }
}
