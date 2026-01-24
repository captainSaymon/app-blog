import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Comment {
  id: string;
  text: string;
}

const comments: Comment[] = [];

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
