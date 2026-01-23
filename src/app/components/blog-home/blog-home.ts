import { Component, OnInit } from '@angular/core';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { Blog } from '../blog/blog';

@Component({
 selector: 'app-blog-home',
 standalone: true,
 imports: [SearchBar, Blog],
 templateUrl: './blog-home.html',
 styleUrl: './blog-home.scss'
})
export class BlogHome implements OnInit {

 public filterText: string = '';

 constructor() {
 }

 ngOnInit(): void {
 }

 getName($event: string): void {
   this.filterText = $event;
 }
}
