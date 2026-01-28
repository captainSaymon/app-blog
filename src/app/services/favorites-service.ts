import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'blog_favorites';

  getFavorites(): string[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  toggleFavorite(id: string): void {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(id);
    if (index > -1) {
      favorites.splice(index, 1);
    }
    else {
      favorites.push(id);
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
  }

  isFavorite(id: string): boolean {
    const favorites = this.getFavorites();
    return favorites.includes(id);
  }
}
