import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../core/language.service';
import { CLINIC_DATA } from '../../data/clinic-data';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  clinicData = CLINIC_DATA;
  isScrolled = false;
  mobileOpen = false;
  
  constructor(public langService: LanguageService) {}
  
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  
  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    document.body.style.overflow = this.mobileOpen ? 'hidden' : '';
  }
  
  closeMobile() {
    this.mobileOpen = false;
    document.body.style.overflow = '';
  }
  
  toggleLanguage() {
    this.langService.toggleLanguage();
  }
}
