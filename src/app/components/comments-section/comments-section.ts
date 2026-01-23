import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsService, Comment } from '../../services/comments-service';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'comments-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comments-section.html',
  styleUrls: ['./comments-section.scss'],
})
export class CommentsSection implements OnInit {
  @Input() id!: string;
  comments$!: Observable<Comment[]>;
  commentForm!: FormGroup;

  constructor(private commentsService: CommentsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Formularz
    this.commentForm = this.fb.group({
      text: ['', Validators.required]
    });

    // Początkowe pobranie komentarzy
    this.loadComments();
  }

  loadComments() {
    this.comments$ = this.commentsService.getByPostId(this.id);
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const newComment: Comment = {
        id: this.id,
        text: this.commentForm.value.text
      };
      // Dodanie komentarza
      this.commentsService.addComment(newComment).subscribe(() => {
        this.commentForm.reset();
        this.loadComments(); // odświeżenie listy komentarzy
      });
    }
  }
}
