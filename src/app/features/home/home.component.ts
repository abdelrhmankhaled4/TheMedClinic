import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { TrustFeaturesComponent } from '../../shared/components/trust-features/trust-features.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ReviewsComponent } from '../../shared/components/reviews/reviews.component';
import { LocationComponent } from '../../shared/components/location/location.component';
import { HoursComponent } from '../../shared/components/hours/hours.component';
import { CtaComponent } from '../../shared/components/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TrustFeaturesComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    ReviewsComponent,
    LocationComponent,
    HoursComponent,
    CtaComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
