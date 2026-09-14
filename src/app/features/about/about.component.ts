import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/language.service';
import { CLINIC_DATA } from '../../data/clinic-data';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  clinicData = CLINIC_DATA;

  highlights = [
    {
      icon: 'sparkles',
      ar: 'نظافة وتعقيم مثالي',
      en: 'Perfect sterilization',
      subtitleAr: 'معايير عالمية',
      subtitleEn: 'International standards'
    },
    {
      icon: 'stethoscope',
      ar: 'فريق طبي محترف',
      en: 'Professional medical team',
      subtitleAr: 'خبرة وكفاءة',
      subtitleEn: 'Expertise & efficiency'
    },
    {
      icon: 'beaker',
      ar: 'أحدث التقنيات',
      en: 'Latest technology',
      subtitleAr: 'أجهزة طبية متطورة',
      subtitleEn: 'Advanced medical devices'
    },
    {
      icon: 'heart',
      ar: 'اهتمام بكل تفصيلة',
      en: 'Attention to detail',
      subtitleAr: 'رعاية شخصية',
      subtitleEn: 'Personalized care'
    },
  ];

  stats = [
    {
      value: '10+',
      ar: 'سنوات من الخبرة',
      en: 'Years Experience',
      icon: 'calendar-check'
    },
    {
      value: '5000+',
      ar: 'عميل سعيد',
      en: 'Happy Clients',
      icon: 'users'
    },
    {
      value: '4.9★',
      ar: 'تقييم جوجل',
      en: 'Google Rating',
      icon: 'star'
    },
    {
      value: '15+',
      ar: 'جهاز طبي متطور',
      en: 'Medical Devices',
      icon: 'microscope'
    },
  ];

  constructor(public langService: LanguageService) {}
}
