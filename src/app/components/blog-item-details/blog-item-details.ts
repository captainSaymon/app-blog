import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Post } from '../../services/data-service';


@Component({
  selector: 'blog-item-details',
  templateUrl: './blog-item-details.html',
  styleUrl: './blog-item-details.scss',
})
export class BlogItemDetails implements OnInit {
  public post: Post = { title: '', text: '', image: '', likes: 0};

  constructor(private route: ActivatedRoute, private service: DataService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getAll().subscribe((posts: Post[]) => {
        const found = posts.find(p => (p as any)._id === id); 
        if (found) {
          this.post = found;
        }
      });
    }
  }
}
