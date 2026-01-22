import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DataService } from '../../services/data';
import { BlogItem } from '../blog-item/blog-item';

@Component({
 selector: 'blog',
 standalone: true,
 imports: [BlogItem, CommonModule],
 providers: [DataService],
 templateUrl: './blog.html',
 styleUrl: './blog.scss'
})
export class Blog implements OnInit{
 public items$: any;

 constructor(private service: DataService) {
 }

 ngOnInit() {
   this.items$ = this.service.getAll();
 }

}
