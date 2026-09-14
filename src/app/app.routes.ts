import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { BookingComponent } from './features/book-appointment/booking.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'عيادات ذا ميد التخصصية - The Med Clinics'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'عن العيادة - About Us - The Med Clinics'
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'خدماتنا - Our Services - The Med Clinics'
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'المعرض - Gallery - The Med Clinics'
  },
  {
    path: 'book-appointment',
    component: BookingComponent,
    title: 'احجز موعد - Book Appointment - The Med Clinics'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'تواصل معنا - Contact Us - The Med Clinics'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
