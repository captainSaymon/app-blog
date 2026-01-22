import { Component, Input } from '@angular/core';
import { BlogItemImage } from '../blog-item-image/blog-item-image';
import { BlogItemText } from '../blog-item-text/blog-item-text';

@Component({
 selector: 'blog-item',
 standalone: true,
 imports: [BlogItemImage, BlogItemText],
 templateUrl: './blog-item.html',
 styleUrl: './blog-item.scss'
})
export class BlogItem {
 @Input() image?: string;
 @Input() text?: string;

}
