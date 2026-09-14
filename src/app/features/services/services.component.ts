import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/language.service';
import { SERVICES } from '../../data/clinic-data';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, IconComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = SERVICES;
  
  constructor(public langService: LanguageService) {}
}
