import { Component, Input } from '@angular/core';
import { BlogItemImage } from '../blog-item-image/blog-item-image';
import { BlogItemText } from '../blog-item-text/blog-item-text';
import { CommentsSection } from '../comments-section/comments-section';
import { RouterModule } from '@angular/router';

@Component({
 selector: 'blog-item',
 standalone: true,
 imports: [BlogItemImage, BlogItemText, CommentsSection, RouterModule],
 templateUrl: './blog-item.html',
 styleUrl: './blog-item.scss'
})
export class BlogItem {
 @Input() image?: string;
 @Input() text?: string;
 @Input() postId!: string;
}
