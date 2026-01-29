import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemImage } from '../blog-item-image/blog-item-image';
import { BlogItemText } from '../blog-item-text/blog-item-text';
import { CommentsSection } from '../comments-section/comments-section';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../../services/favorites-service';
import { Rating } from '../../shared/rating/rating';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'blog-item',
  standalone: true,
  imports: [CommonModule, BlogItemImage, BlogItemText, CommentsSection, RouterModule, Rating],
  templateUrl: './blog-item.html',
  styleUrl: './blog-item.scss'
})
export class BlogItem {
  @Input() image?: string;
  @Input() text?: string;
  @Input() postId!: string;
  @Input() like!: number;

  constructor(private favoritesService: FavoritesService,  private dataService: DataService) {}

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.postId);
  }

  toggleFavorite(): void {
    this.favoritesService.toggleFavorite(this.postId);
    if(this.favoritesService.isFavorite(this.postId))
    {
      this.like++;
      this.dataService.addlike(this.postId).subscribe({
        next: () => {
          console.log('Polubienie posta');
        },
        error: (err) => {
          console.error('Błąd polubienia posta', err);
          this.like--;
        }
      });
    }
    else {
      this.like--;
      this.dataService.unlikePost(this.postId).subscribe({
        next: () => console.log('Rezygnacja z polubienia posta'),
        error: (err) => {
          console.error('Błąd przy rezygnacji z polubienia posta', err);
          this.like++;
        }
      });
    }
  }
}
