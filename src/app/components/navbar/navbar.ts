import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router, RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
 
  constructor(
	public authService: AuthService,
	private router: Router
  ) { }
 
  signOut() {
	this.authService.logout().subscribe({
  	next: () => {
    	this.router.navigate(['/']);
  	}
	});
  }
}
