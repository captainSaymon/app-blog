import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog/blog';

@Component({
 selector: 'blog-home',
 standalone: true,
 imports: [Blog],
 templateUrl: './blog-home.html',
 styleUrl: './blog-home.scss'
})
export class BlogHome implements OnInit {
 public filterText: string = '';

 constructor() { }

  ngOnInit() { }

 getName($event: string): void {
   this.filterText = $event;
 }
}
