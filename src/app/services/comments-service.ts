import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Comment {
  id: string;
  text: string;
}

const comments: Comment[] = [
  { text: 'hi', id: '64549b5362f53f833c89f6ab' },
  { text: 'hi there', id: '64549b5362f53f833c89f6ab' },
  { text: 'hello', id: '64549b6062f53f833c89f6ac' }
];

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor() {}

  getByPostId(id: string): Observable<Comment[]> {
  return of(comments.filter(c => c.id === id));
}


  getAll(): Observable<Comment[]> {
    return of(comments);
  }

    addComment(comment: Comment) {
    comments.push(comment);
    return of(comment);
  }
}
