import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router, RouterModule } from '@angular/router';
import { AddPost } from '../add-post/add-post';
import { Gallery } from '../gallery/gallery';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule, SearchBar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  @ViewChild('container', { read: ViewContainerRef, static: true})
  container!: ViewContainerRef;
  activeType: 'add' | 'gallery' | null = null;
  public items$: any;

  constructor(public authService: AuthService, private router: Router, private service: DataService) { }

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

  onSearch(term: string) {
    this.router.navigate(['/blog'], {
      queryParams: { search: term || null },
      queryParamsHandling: 'merge'
    });
  }

  mostPopularPost() {
    this.service.getAll().subscribe((posts: any) => {
      const arr = Array.isArray(posts) ? posts : posts.data;
      this.items$ = arr;
      const postWithMostLikes = arr.reduce((max: any, post: any) => {
        return post.likes > (max.likes || 0) ? post : max;
      }, {} as any);

      if (postWithMostLikes && postWithMostLikes._id) {
        this.router.navigate(['/blog/detail/', postWithMostLikes._id]);
      }
    });
  }
}