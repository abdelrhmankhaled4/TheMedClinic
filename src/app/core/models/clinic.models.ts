/**
 * ==========================================
 * DERMA LUXE CLINIC - CORE DATA MODELS
 * Centralized TypeScript interfaces for all clinic data
 * ==========================================
 * UPDATE OFFICIAL DATA: Replace placeholder content with real clinic data
 * ==========================================
 */

// ==========================================
// BASE TYPES
// ==========================================

export interface BaseEntity {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  sortOrder: number;
}

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  canonicalUrl: string;
}

export interface MediaAsset {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  mimeType: string;
  size: number;
  isPrimary: boolean;
  sortOrder: number;
}

// ==========================================
// CLINIC SETTINGS
// ==========================================

export interface ClinicSettings {
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  logo: MediaAsset;
  favicon: string;
  address: Address;
  phone: string;
  phoneSecondary?: string;
  email: string;
  emailBooking?: string;
  workingHours: WorkingHours[];
  socialLinks: SocialLink[];
  googleMapsEmbedUrl: string;
  googleMapsLink: string;
  emergencyPhone?: string;
  licenseNumber: string;
  establishedYear: number;
  certifications: Certification[];
}

export interface Address {
  street: string;
  streetAr: string;
  district: string;
  districtAr: string;
  city: string;
  cityAr: string;
  governorate: string;
  governorateAr: string;
  postalCode: string;
  country: string;
  countryAr: string;
  coordinates: Coordinates;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface WorkingHours {
  day: string;
  dayAr: string;
  openTime: string;
  closeTime: string;
  isClosed: boolean;
  note?: string;
  noteAr?: string;
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin' | 'whatsapp' | 'tiktok';
  url: string;
  label: string;
  labelAr: string;
  isActive: boolean;
  sortOrder: number;
}

export interface Certification {
  name: string;
  nameAr: string;
  issuer: string;
  issuerAr: string;
  year: number;
  image: MediaAsset;
  verificationUrl?: string;
}

// ==========================================
// DOCTORS
// ==========================================

export interface Doctor extends BaseEntity, SEOData {
  name: string;
  nameAr: string;
  title: string;
  titleAr: string;
  shortBio: string;
  shortBioAr: string;
  fullBio: string;
  fullBioAr: string;
  photo: MediaAsset;
  specialties: string[];
  specialtiesAr: string[];
  qualifications: Qualification[];
  experience: Experience[];
  languages: Language[];
  awards: Award[];
  publications: Publication[];
  memberships: Membership[];
  services: string[]; // Service slugs this doctor provides
  consultationFee: number;
  consultationFeeCurrency: string;
  availableDays: string[];
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  videoUrl?: string;
}

export interface Qualification {
  degree: string;
  degreeAr: string;
  institution: string;
  institutionAr: string;
  year: number;
  country: string;
}

export interface Experience {
  position: string;
  positionAr: string;
  organization: string;
  organizationAr: string;
  startYear: number;
  endYear?: number;
  isCurrent: boolean;
  description?: string;
  descriptionAr?: string;
}

export interface Language {
  code: string;
  name: string;
  nameAr: string;
  proficiency: 'native' | 'fluent' | 'intermediate' | 'basic';
}

export interface Award {
  name: string;
  nameAr: string;
  issuer: string;
  issuerAr: string;
  year: number;
  description?: string;
  descriptionAr?: string;
}

export interface Publication {
  title: string;
  titleAr: string;
  journal: string;
  year: number;
  url?: string;
  doi?: string;
}

export interface Membership {
  organization: string;
  organizationAr: string;
  role?: string;
  roleAr?: string;
  yearJoined: number;
  isActive: boolean;
}

// ==========================================
// SERVICES / TREATMENTS
// ==========================================

export interface Service extends BaseEntity, SEOData {
  name: string;
  nameAr: string;
  shortDescription: string;
  shortDescriptionAr: string;
  fullDescription: string;
  fullDescriptionAr: string;
  category: ServiceCategory;
  categoryAr: string;
  icon: string; // Lucide icon name
  heroImage: MediaAsset;
  gallery: MediaAsset[];
  benefits: Benefit[];
  benefitsAr: Benefit[];
  indications: string[];
  indicationsAr: string[];
  contraindications: string[];
  contraindicationsAr: string[];
  procedureSteps: ProcedureStep[];
  procedureStepsAr: ProcedureStep[];
  duration: string;
  durationAr: string;
  sessionsRequired: string;
  sessionsRequiredAr: string;
  recoveryTime: string;
  recoveryTimeAr: string;
  priceRange: PriceRange;
  isPopular: boolean;
  isFeatured: boolean;
  relatedServices: string[]; // Service slugs
  faqs: FAQ[];
  faqsAr: FAQ[];
  beforeAfterImages: BeforeAfterImage[];
  technologyUsed: Technology[];
  doctors: string[]; // Doctor slugs who provide this service
}

export type ServiceCategory =
  | 'laser'
  | 'medical-dermatology'
  | 'cosmetic-dermatology'
  | 'skin-rejuvenation'
  | 'hair-restoration'
  | 'body-contouring'
  | 'pediatric-dermatology';

export interface Benefit {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
}

export interface ProcedureStep {
  step: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  duration: string;
  durationAr: string;
  image?: MediaAsset;
}

export interface PriceRange {
  min: number;
  max: number;
  currency: string;
  note?: string;
  noteAr?: string;
}

export interface FAQ {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
  category?: string;
}

export interface BeforeAfterImage {
  before: MediaAsset;
  after: MediaAsset;
  description: string;
  descriptionAr: string;
  treatmentDuration: string;
  treatmentDurationAr: string;
  sessionsCount: number;
}

export interface Technology {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: MediaAsset;
  manufacturer: string;
  certifications: string[];
}

// ==========================================
// BLOG / NEWS
// ==========================================

export interface BlogPost extends BaseEntity, SEOData {
  title: string;
  titleAr: string;
  slug: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  featuredImage: MediaAsset;
  author: string; // Doctor slug or 'clinic'
  authorName: string;
  authorNameAr: string;
  authorRole: string;
  authorRoleAr: string;
  category: BlogCategory;
  categoryAr: string;
  tags: string[];
  tagsAr: string[];
  readTime: number; // minutes
  viewCount: number;
  isFeatured: boolean;
  isPublished: boolean;
  publishedAt: string;
  relatedPosts: string[]; // Post slugs
}

export type BlogCategory =
  | 'skin-care-tips'
  | 'treatment-guides'
  | 'clinic-news'
  | 'doctor-insights'
  | 'patient-stories'
  | 'technology-updates'
  | 'seasonal-care';

// ==========================================
// GALLERY
// ==========================================

export interface GalleryItem extends BaseEntity {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: MediaAsset;
  category: GalleryCategory;
  categoryAr: string;
  tags: string[];
  treatmentType?: string;
  treatmentTypeAr?: string;
  doctor?: string; // Doctor slug
  isBeforeAfter: boolean;
  beforeImage?: MediaAsset;
  afterImage?: MediaAsset;
}

export type GalleryCategory =
  | 'clinic-facilities'
  | 'treatments'
  | 'before-after'
  | 'team'
  | 'events'
  | 'technology';

// ==========================================
// TESTIMONIALS / REVIEWS
// ==========================================

export interface Testimonial extends BaseEntity {
  patientName: string;
  patientInitials: string;
  patientPhoto?: MediaAsset;
  rating: number;
  title: string;
  titleAr: string;
  content: string;
  contentAr: string;
  service: string; // Service slug
  serviceName: string;
  serviceNameAr: string;
  doctor?: string; // Doctor slug
  doctorName?: string;
  doctorNameAr?: string;
  treatmentDate: string;
  isVerified: boolean;
  isFeatured: boolean;
  consentGiven: boolean;
}

// ==========================================
// APPOINTMENT / BOOKING
// ==========================================

export interface AppointmentRequest {
  id?: string;
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  service: string; // Service slug
  doctor?: string; // Doctor slug
  message: string;
  isNewPatient: boolean;
  insuranceProvider?: string;
  insuranceNumber?: string;
  referralSource?: string;
  status: AppointmentStatus;
  createdAt: string;
  confirmedAt?: string;
  confirmedBy?: string;
  notes?: string;
}

export type AppointmentStatus =
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed'
  | 'no-show'
  | 'rescheduled';

export interface TimeSlot {
  time: string;
  isAvailable: boolean;
  doctor?: string;
}

// ==========================================
// CONTACT / INQUIRY
// ==========================================

export interface ContactInquiry {
  id?: string;
  type: InquiryType;
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  service?: string;
  doctor?: string;
  preferredContactMethod: 'phone' | 'email' | 'whatsapp';
  preferredContactTime?: string;
  status: InquiryStatus;
  createdAt: string;
  respondedAt?: string;
  respondedBy?: string;
  response?: string;
}

export type InquiryType =
  | 'general'
  | 'appointment'
  | 'medical-question'
  | 'billing'
  | 'complaint'
  | 'feedback'
  | 'career'
  | 'partnership'
  | 'media';

export type InquiryStatus =
  | 'new'
  | 'in-progress'
  | 'resolved'
  | 'closed'
  | 'spam';

// ==========================================
// STATISTICS / METRICS
// ==========================================

export interface ClinicStats {
  patientsTreated: number;
  yearsExperience: number;
  doctorsCount: number;
  treatmentsOffered: number;
  successRate: number;
  satisfactionRate: number;
  awardsCount: number;
  technologiesCount: number;
}

// ==========================================
// NAVIGATION / MENU
// ==========================================

export interface NavItem {
  label: string;
  labelAr: string;
  route: string;
  icon?: string;
  children?: NavItem[];
  isExternal?: boolean;
  externalUrl?: string;
  badge?: string;
  badgeAr?: string;
  requiresAuth?: boolean;
}

// ==========================================
// HOME PAGE SECTIONS
// ==========================================

export interface HeroSlide {
  id: string;
  headline: string;
  headlineAr: string;
  subheadline: string;
  subheadlineAr: string;
  ctaText: string;
  ctaTextAr: string;
  ctaRoute: string;
  backgroundImage: MediaAsset;
  backgroundVideo?: string;
  overlayOpacity: number;
  textAlign: 'left' | 'center' | 'right';
  isActive: boolean;
  sortOrder: number;
}

export interface FeatureHighlight {
  icon: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  route?: string;
  routeText?: string;
  routeTextAr?: string;
}

export interface StatCounter {
  label: string;
  labelAr: string;
  value: number | string;
  suffix?: string;
  prefix?: string;
  icon: string;
  animationDuration: number;
}

// ==========================================
// FOOTER
// ==========================================

export interface FooterData {
  clinicInfo: {
    name: string;
    nameAr: string;
    tagline: string;
    taglineAr: string;
    logo: MediaAsset;
    address: Address;
    phone: string;
    email: string;
  };
  quickLinks: NavItem[];
  services: NavItem[];
  resources: NavItem[];
  newsletter: {
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
    placeholder: string;
    placeholderAr: string;
    buttonText: string;
    buttonTextAr: string;
  };
  socialLinks: SocialLink[];
  certifications: Certification[];
  paymentMethods: PaymentMethod[];
  copyright: string;
  copyrightAr: string;
}

export interface PaymentMethod {
  name: string;
  nameAr: string;
  icon: string;
  isActive: boolean;
}

// ==========================================
// LANGUAGE / I18N
// ==========================================

export type SupportedLocale = 'ar' | 'en';

export interface LocaleConfig {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  flag: string;
  dateFormat: string;
  numberFormat: string;
  currency: string;
}

export const SUPPORTED_LOCALES: LocaleConfig[] = [
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    flag: '🇪🇬',
    dateFormat: 'dd/MM/yyyy',
    numberFormat: 'ar-EG',
    currency: 'EGP'
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    flag: '🇺🇸',
    dateFormat: 'MM/dd/yyyy',
    numberFormat: 'en-US',
    currency: 'USD'
  }
];

// ==========================================
// UTILITY TYPES
// ==========================================

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface ApiResponse<T> {
  data: T;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    totalPages?: number;
  };
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}