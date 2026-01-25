import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemImage } from '../blog-item-image/blog-item-image';
import { BlogItemText } from '../blog-item-text/blog-item-text';
import { CommentsSection } from '../comments-section/comments-section';
import { RouterModule } from '@angular/router';
import { Favorites } from '../../services/favorites';

@Component({
  selector: 'blog-item',
  standalone: true,
  imports: [CommonModule, BlogItemImage, BlogItemText, CommentsSection, RouterModule],
  templateUrl: './blog-item.html',
  styleUrl: './blog-item.scss'
})
export class BlogItem {
  @Input() image?: string;
  @Input() text?: string;
  @Input() postId!: string;

  constructor(private favoritesService: Favorites) {}

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.postId);
  }

  toggleFavorite(): void {
    this.favoritesService.toggleFavorite(this.postId);
  }
}
