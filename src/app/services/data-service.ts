import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { URL } from './config';

export interface Post {
  title: string;
  text: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<Post[]>(`${URL}/gets/all`);
  }

  getCount() {
    return this.getAll().pipe(map(posts => posts.length));
  }

  addPost(id: string, post: Post) {
    return this.http.post(`${URL}/posts/${id}`, post);
  }

  addlike(id: string) {
    return this.http.patch(`${URL}/posts/like/${id}`,  {});
  }

  unlikePost(id: string) {
    return this.http.patch(`${URL}/posts/unlike/${id}`, {});
  }
}
