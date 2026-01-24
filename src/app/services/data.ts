import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Post {
  title: string;
  text: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:3100';

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<Post[]>(`${this.url}/gets/all`);
  }

  getCount() {
    return this.getAll().pipe(map(posts => posts.length));
  }

  addPost(id: string, post: Post) {
    return this.http.post(`${this.url}/posts/${id}`, post);
  }
}
