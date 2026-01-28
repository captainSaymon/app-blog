import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DataService } from '../../services/data-service';
import { BlogItem } from '../blog-item/blog-item';
import { AddPost } from '../add-post/add-post';
import { Gallery } from '../gallery/gallery';
import { FilterTextPipe } from '../../pipes/filter-text-pipe';
import { Pagination } from '../../shared/pagination/pagination';
import { PaginatePipe } from '../../pipes/paginate-pipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
 selector: 'blog',
 standalone: true,
 imports: [BlogItem, CommonModule, AddPost, Gallery, FilterTextPipe, Pagination, PaginatePipe],
 providers: [DataService],
 templateUrl: './blog.html',
 styleUrls: ['./blog.scss']
})
export class Blog implements OnInit {
  public items$: any;
  @Input() filterText: string = '';
  public currentPage: number = 1;
  public itemsPerPage: number = 2;

  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const page = parseInt(params['page'], 10);
      this.currentPage = page && page > 0 ? page : 1;
    });

    this.loadPosts();
  }

  loadPosts() {
    this.service.getAll().subscribe((posts: any) => {
      const arr = Array.isArray(posts) ? posts : posts.data;
      this.items$ = arr;
    });
  }

  refreshPosts() {
    this.loadPosts();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge'
    });
  }
}
