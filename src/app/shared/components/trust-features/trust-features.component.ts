import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/language.service';
import { TRUST_FEATURES } from '../../../data/clinic-data';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-trust-features',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './trust-features.component.html',
  styleUrls: ['./trust-features.component.css']
})
export class TrustFeaturesComponent {
  features = TRUST_FEATURES;
  
  constructor(public langService: LanguageService) {}
}
