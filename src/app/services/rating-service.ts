import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private readonly STORAGE_KEY = 'blog_ratings';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private getStorage(): Record<string, number[]> {
    if (!isPlatformBrowser(this.platformId)) return {};
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  }

  private saveStorage(ratings: Record<string, number[]>): void {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ratings));
  }

  addRating(postId: string, rating: number): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const ratings = this.getStorage();
    if (!ratings[postId]) ratings[postId] = [];
    ratings[postId].push(rating);
    this.saveStorage(ratings);
  }

  getRatings(postId: string): number[] {
    if (!isPlatformBrowser(this.platformId)) return [];
    const ratings = this.getStorage();
    return ratings[postId] || [];
  }

  getAverage(postId: string): number {
    const ratings = this.getRatings(postId);
    if (!ratings.length) return 0;
    return ratings.reduce((a, b) => a + b, 0) / ratings.length;
  }

  getVotesCount(postId: string): number {
    return this.getRatings(postId).length;
  }
}
