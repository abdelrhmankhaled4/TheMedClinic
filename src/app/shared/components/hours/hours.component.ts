import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/language.service';
import { CLINIC_DATA } from '../../../data/clinic-data';

@Component({
  selector: 'app-hours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent {
  clinicData = CLINIC_DATA;
  days = [
    { key: 'Saturday', nameAr: 'السبت', nameEn: 'Saturday' },
    { key: 'Sunday', nameAr: 'الأحد', nameEn: 'Sunday' },
    { key: 'Monday', nameAr: 'الاثنين', nameEn: 'Monday' },
    { key: 'Tuesday', nameAr: 'الثلاثاء', nameEn: 'Tuesday' },
    { key: 'Wednesday', nameAr: 'الأربعاء', nameEn: 'Wednesday' },
    { key: 'Thursday', nameAr: 'الخميس', nameEn: 'Thursday' },
    { key: 'Friday', nameAr: 'الجمعة', nameEn: 'Friday' }
  ];
  
  constructor(public langService: LanguageService) {}
  
  isToday(dayKey: string): boolean {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    return today === dayKey;
  }
}
