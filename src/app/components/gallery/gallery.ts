import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss']
})
export class Gallery implements OnInit {

  images: string[] = [];
  showLightbox = false;
  currentImage: string | null = null;
  showGallery = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAll().subscribe((posts: any) => {
      const arr = posts as any[];
      this.images = arr
        .map((p: any) => p.image)
        .filter((img: string) => !!img);
    });
  }

  toggleGallery() {
    this.showGallery = !this.showGallery;
    this.ngOnInit();
  }

  openLightbox(img: string) {
    this.currentImage = img;
    this.showLightbox = true;
  }

  closeLightbox() {
    this.showLightbox = false;
    this.currentImage = null;
  }
}
