import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DataService } from '../../services/data';
import { BlogItem } from '../blog-item/blog-item';
import { AddPost } from '../add-post/add-post';
import { Gallery } from '../gallery/gallery';
import { FilterTextPipe } from '../../pipes/filter-text-pipe';

@Component({
 selector: 'blog',
 standalone: true,
 imports: [BlogItem, CommonModule, AddPost, Gallery, FilterTextPipe],
 providers: [DataService],
 templateUrl: './blog.html',
 styleUrl: './blog.scss'
})
export class Blog implements OnInit{
 public items$: any;
 @Input() filterText: string = '';

 constructor(private service: DataService) {
 }

 ngOnInit() {
   this.items$ = this.service.getAll();
 }

  getAll(){
   this.service.getAll().subscribe(response => {
     this.items$ = response;
   });
 }

}
