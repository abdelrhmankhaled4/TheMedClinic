import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../../core/language.service';
import { CLINIC_DATA } from '../../../data/clinic-data';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  clinicData = CLINIC_DATA;
  addressCopied = false;
  plusCodeCopied = false;
  safeMapUrl: SafeResourceUrl;

  private sanitizer = inject(DomSanitizer);
  public langService = inject(LanguageService);

  constructor() {
    // Embed map query for Italian Square Mall, October Gardens, Giza
    const mapEmbedUrl = 'https://maps.google.com/maps?q=Italian+Square+Mall+October+Gardens+Giza+Egypt&t=&z=15&ie=UTF8&iwloc=&output=embed';
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(mapEmbedUrl);
  }

  copyAddress(): void {
    const textToCopy = this.langService.isRTL() 
      ? this.clinicData.address.ar + ' - ' + this.clinicData.address.plusCode
      : this.clinicData.address.en + ' - ' + this.clinicData.address.plusCode;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      this.addressCopied = true;
      setTimeout(() => {
        this.addressCopied = false;
      }, 2500);
    });
  }

  copyPlusCode(): void {
    navigator.clipboard.writeText(this.clinicData.address.plusCode).then(() => {
      this.plusCodeCopied = true;
      setTimeout(() => {
        this.plusCodeCopied = false;
      }, 2500);
    });
  }
}

