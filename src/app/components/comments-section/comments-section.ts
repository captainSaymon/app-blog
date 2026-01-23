import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsService, Comment } from '../../services/comments-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'comments-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments-section.html',
  styleUrls: ['./comments-section.scss'],
})
export class CommentsSection implements OnInit {
  @Input() id!: string;
  comments$!: Observable<Comment[]>;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService.getByPostId(this.id);
  }
}
