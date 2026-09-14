import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/language.service';
import { CLINIC_DATA } from '../../../data/clinic-data';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.css']
})
export class WhatsappButtonComponent {
  clinicData = CLINIC_DATA;
  
  constructor(public langService: LanguageService) {}
  
  get whatsappUrl(): string {
    const message = this.langService.isRTL() 
      ? 'مرحباً، أرغب في حجز موعد في عيادات ذا ميد التخصصية'
      : 'Hello, I would like to book an appointment at The Med Clinics';
    
    return `https://wa.me/${this.clinicData.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  }
}
