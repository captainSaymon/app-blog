import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router, RouterModule } from '@angular/router';
import { AddPost } from '../add-post/add-post';
import { Gallery } from '../gallery/gallery';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  activeType: 'add' | 'gallery' | null = null;

  constructor(public authService: AuthService, private router: Router) { }

  signOut() {
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/'])
    });
  }

  toggleComponent(type: 'add' | 'gallery') {
    if (this.activeType === type) {
      this.container.clear();
      this.activeType = null;
      return;
    }
    this.container.clear();
    
    if (type === 'add') {
      this.container.createComponent(AddPost);
      this.activeType = 'add';
    } else {
      this.container.createComponent(Gallery);
      this.activeType = 'gallery';
    }
  }
}