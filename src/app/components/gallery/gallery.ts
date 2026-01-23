import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {

  images: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const posts = this.dataService.getAll();
    this.images = posts.map(p => p.image).filter(img => !!img);
  }

  showGallery = false;

  toggleGallery() {
    this.showGallery = !this.showGallery;
    this.ngOnInit()
  }
}
