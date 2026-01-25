import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingService } from '../../services/rating-service';

@Component({
  selector: 'rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.html',
  styleUrls: ['./rating.scss']
})
export class Rating implements OnInit {
  @Input() postId!: string;
  @Input() readonly: boolean = false;

  stars: number[] = [1, 2, 3, 4, 5];
  hoverRating: number = 0;
  currentRating: number = 0;
  averageRating: number = 0;
  votesCount: number = 0;

  constructor(private ratingService: RatingService) {}

  ngOnInit() {
    this.loadRating();
  }

  loadRating() {
    this.votesCount = this.ratingService.getVotesCount(this.postId);
    this.averageRating = this.ratingService.getAverage(this.postId);
    this.currentRating = Math.round(this.averageRating);
  }

  onStarHover(rating: number): void {
    if (!this.readonly) this.hoverRating = rating;
  }

  onStarClick(rating: number): void {
    if (this.readonly) return;
    this.ratingService.addRating(this.postId, rating);
    this.loadRating();
  }
}
