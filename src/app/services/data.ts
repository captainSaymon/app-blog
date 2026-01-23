import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Post {
  id?: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/api/posts`);
  }

  getCount(): Observable<number> {
    return this.getAll().pipe(map(posts => posts.length));
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.url}/api/posts`, post);
  }
}
