import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/language.service';
import { GALLERY_IMAGES } from '../../data/clinic-data';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = GALLERY_IMAGES;
  lightboxOpen = false;
  currentIndex = 0;
  
  constructor(public langService: LanguageService) {}
  
  openLightbox(index: number): void {
    this.currentIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }
  
  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }
  
  nextImage(event: Event): void {
    event.stopPropagation();
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }
  
  prevImage(event: Event): void {
    event.stopPropagation();
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  
  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    
    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowRight') {
      this.langService.isRTL() ? this.prevImage(event) : this.nextImage(event);
    } else if (event.key === 'ArrowLeft') {
      this.langService.isRTL() ? this.nextImage(event) : this.prevImage(event);
    }
  }
}
