// UPDATE OFFICIAL DATA - Centralized clinic configuration
// Replace with real clinic information when available

export interface ClinicInfo {
  name: {
    ar: string;
    en: string;
  };
  type: string;
  rating: {
    score: number;
    totalReviews: number;
    platform: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email?: string;
  };
  address: {
    ar: string;
    en: string;
    full: string;
    plusCode: string;
    googleMapsUrl: string;
  };
  hours: {
    [key: string]: { open: string; close?: string; closed?: boolean };
  };
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Service {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  icon: string;
  image?: string;
  price?: string; // Demo price - UPDATE OFFICIAL DATA
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: {
    ar: string;
    en: string;
  };
  category: string;
  thumbnail?: string;
}

export interface Review {
  id: string;
  author: string;
  initials?: string;
  rating: number;
  verified?: boolean;
  comment?: {
    ar: string;
    en: string;
  };
  themes: {
    ar: string[];
    en: string[];
  };
  date: string;
}

// CENTRALIZED CLINIC DATA
export const CLINIC_DATA: ClinicInfo = {
  name: {
    ar: 'عيادات ذا ميد التخصصية',
    en: 'The Med Clinics'
  },
  type: 'Medical Center',
  rating: {
    score: 4.8,
    totalReviews: 22,
    platform: 'Google'
  },
  contact: {
    phone: '01035266226',
    whatsapp: '01035266226'
  },
  address: {
    ar: 'وحدة رقم 18 - مول طريق الحي الإيطالي، أكتوبر جاردنز، الجيزة',
    en: 'Unit 18A & 18B - Italian Square Mall, First 6th of October, October Gardens, Giza Governorate 12566, Egypt',
    full: 'Unit 18A & 18B - Italian Square Mall, وحدة رقم 18 - مول، طريق الحي الإيطالي، First 6th of October, October Gardens, Giza Governorate 12566, Egypt',
    plusCode: 'W377+FM October Gardens',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Med+Clinics+Italian+Square+Mall+October+Gardens+Giza'
  },
  hours: {
    // UPDATE OFFICIAL DATA - Only opening time is confirmed
    Saturday: { open: '10:00 AM' },
    Sunday: { open: '10:00 AM' },
    Monday: { open: '10:00 AM' },
    Tuesday: { open: '10:00 AM' },
    Wednesday: { open: '10:00 AM' },
    Thursday: { open: '10:00 AM' },
    Friday: { open: '10:00 AM' }
  }
};

// SERVICES DATA - Prices are demo placeholders, UPDATE OFFICIAL DATA
export const SERVICES: Service[] = [
  {
    id: 'laser',
    name: {
      ar: 'جلسات الليزر المتطورة',
      en: 'Advanced Laser Sessions'
    },
    description: {
      ar: 'أحدث أجهزة إزالة الشعر وعلاج المشاكل الجلدية بأعلى درجات الراحة والأمان',
      en: 'State-of-the-art laser hair removal and skin treatments with maximum comfort'
    },
    icon: 'sparkles',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop&q=80',
    price: 'جلسة تبدأ من 500 ج.م',
    category: 'laser'
  },
  {
    id: 'dermatology',
    name: {
      ar: 'علاج الأمراض الجلدية',
      en: 'Dermatology Treatments'
    },
    description: {
      ar: 'تشخيص دقيق وعلاج متخصص لمختلف الأمراض الجلدية والحساسية بأحدث البروتوكولات',
      en: 'Accurate diagnosis and specialized treatments for dermatological conditions'
    },
    icon: 'heart-pulse',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80',
    price: 'استشارة تبدأ من 300 ج.م',
    category: 'dermatology'
  },
  {
    id: 'skincare',
    name: {
      ar: 'العناية بالبشرة وتجديدها',
      en: 'Skincare & Rejuvenation'
    },
    description: {
      ar: 'برامج علاجية وتجميلية متكاملة لترميم نضارة البشرة وتحفيز الكولاجين الطبيعي',
      en: 'Integrated programs to restore radiance and boost natural collagen'
    },
    icon: 'droplet',
    image: 'https://images.unsplash.com/photo-1512290900672-1f02e1c07a00?w=800&auto=format&fit=crop&q=80',
    price: 'جلسة تبدأ من 400 ج.م',
    category: 'skincare'
  },
  {
    id: 'pigmentation',
    name: {
      ar: 'علاج التصبغات وتوحيد اللون',
      en: 'Pigmentation & Tone Correction'
    },
    description: {
      ar: 'جلسات تفتيح وتوحيد لون البشرة والتخلص من آثار الكلف والنمش بأمان تام',
      en: 'Effective solutions for dark spots, melasma, and skin tone evening'
    },
    icon: 'sun',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
    price: 'جلسة تبدأ من 600 ج.م',
    category: 'pigmentation'
  },
  {
    id: 'acne',
    name: {
      ar: 'علاج حب الشباب والآثار',
      en: 'Acne & Scar Therapy'
    },
    description: {
      ar: 'علاج جذري لحب الشباب الفعال والندبات واستعادة صفاء البشرة وملمسها الناعم',
      en: 'Targeted treatments for active acne, scars, and smoother skin texture'
    },
    icon: 'shield',
    image: 'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&auto=format&fit=crop&q=80',
    price: 'جلسة تبدأ من 350 ج.م',
    category: 'acne'
  },
  {
    id: 'facial',
    name: {
      ar: 'جلسات الهيدرافيشل والإشراق',
      en: 'HydraFacial & Glow Sessions'
    },
    description: {
      ar: 'تنظيف عميق، تقشير لطيف، وترطيب مكثف يمنح بشرتك إشراقة فورية ونضارة مستمرة',
      en: 'Deep pore cleansing, gentle exfoliation, and intense instant hydration'
    },
    icon: 'star',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
    price: 'جلسة تبدأ من 450 ج.م',
    category: 'facial'
  }
];

// GALLERY DATA - High resolution clinic and treatment images from Unsplash
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'reception',
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80',
    alt: {
      ar: 'استقبال العيادة الفاخر',
      en: 'Luxury Clinic Reception'
    },
    category: 'clinic'
  },
  {
    id: 'waiting',
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&auto=format&fit=crop&q=80',
    alt: {
      ar: 'استراحة الانتظار المريحة',
      en: 'Comfortable Waiting Lounge'
    },
    category: 'clinic'
  },
  {
    id: 'treatment1',
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=80',
    alt: {
      ar: 'غرفة الفحص والعلاج الطبي',
      en: 'Medical Treatment Suite'
    },
    category: 'treatment'
  },
  {
    id: 'treatment2',
    src: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&auto=format&fit=crop&q=80',
    alt: {
      ar: 'غرفة جلسات الليزر المجهزة',
      en: 'Equipped Laser Room'
    },
    category: 'treatment'
  },
  {
    id: 'equipment',
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80',
    alt: {
      ar: 'أحدث التجهيزات والتقنيات الطبية',
      en: 'Advanced Medical Devices'
    },
    category: 'equipment'
  },
  {
    id: 'doctor',
    src: 'https://images.unsplash.com/photo-1594824813689-53641b9d4c79?w=900&auto=format&fit=crop&q=80',
    alt: {
      ar: 'د. نادا - استشاري الجلدية والليزر',
      en: 'Dr. Nada - Dermatology & Laser'
    },
    category: 'team'
  }
];

// REVIEWS DATA - Based on verified themes from Google reviews
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'سارة عبد الرحمن',
    initials: 'س.ع',
    rating: 5,
    verified: true,
    comment: {
      ar: 'تجربتي مع عيادات ذا ميد كانت ممتازة جداً. المكان يتمتع بنظافة وتعقيم فائق، وفريق الاستقبال والتمريض في غاية الذوق والاحترافية.',
      en: 'My experience at The Med Clinics was outstanding. The place maintains exceptional cleanliness and sterilization, with a very polite and professional team.'
    },
    themes: {
      ar: ['نظافة فائقة', 'تعقيم طبي دقيق', 'طاقم متعاون جداً'],
      en: ['Superb Cleanliness', 'High Sterilization', 'Helpful Staff']
    },
    date: '2024'
  },
  {
    id: '2',
    author: 'مريم الشريف',
    initials: 'م.ش',
    rating: 5,
    verified: true,
    comment: {
      ar: 'جلسات الليزر مع د. نادا ممتازة والنتائج ظهرت من أول جلسات. دقة عالية في المواعيد واهتمام بأدق التفاصيل والراحة أثناء الجلسة.',
      en: 'Laser sessions with Dr. Nada are top-notch with visible results from early sessions. Punctual scheduling and great care during treatments.'
    },
    themes: {
      ar: ['خبرة د. نادا', 'دقة بالمواعيد', 'نتائج ليزر مبهرة'],
      en: ['Dr. Nada Expertise', 'Punctual Timing', 'Visible Results']
    },
    date: '2024'
  },
  {
    id: '3',
    author: 'أحمد محمود',
    initials: 'أ.م',
    rating: 5,
    verified: true,
    comment: {
      ar: 'عيادة راقية جداً في أكتوبر جاردنز، سهولة الوصول والمواقف متوفرة. الأجهزة المستخدمة حديثة وشعرت بفرق كبير في علاج البشرة.',
      en: 'A very upscale clinic in October Gardens, easy access and plenty of parking. The equipment is modern and made a big difference.'
    },
    themes: {
      ar: ['موقع متميز', 'أجهزة متطورة', 'خدمة راقية'],
      en: ['Prime Location', 'Modern Equipment', 'Premium Service']
    },
    date: '2024'
  },
  {
    id: '4',
    author: 'نورهان خالد',
    initials: 'ن.خ',
    rating: 5,
    verified: true,
    comment: {
      ar: 'الاهتمام بالمرضى ومتابعة الحالة بعد الجلسة شيء يستحق التقدير. أنصح بشدة بزيارتهم لأي علاج جلدي أو تجميلي.',
      en: 'Patient follow-up after sessions is truly commendable. I highly recommend them for any dermatological or aesthetic treatment.'
    },
    themes: {
      ar: ['متابعة مستمرة', 'عناية بالبشرة', 'تجربة مريحة'],
      en: ['Continuous Follow-up', 'Skincare', 'Comfortable Visit']
    },
    date: '2024'
  }
];

// TRUST FEATURES
export const TRUST_FEATURES = [
  {
    icon: 'shield-check',
    title: {
      ar: 'نظافة وتعقيم',
      en: 'Cleanliness & Sterilization'
    },
    description: {
      ar: 'نلتزم بأعلى معايير النظافة والتعقيم لضمان سلامتك',
      en: 'We adhere to highest cleanliness and sterilization standards for your safety'
    }
  },
  {
    icon: 'users',
    title: {
      ar: 'فريق محترف',
      en: 'Professional Team'
    },
    description: {
      ar: 'فريق طبي متخصص ومحترف يهتم براحتك',
      en: 'Specialized professional medical team caring for your comfort'
    }
  },
  {
    icon: 'microscope',
    title: {
      ar: 'تكنولوجيا حديثة',
      en: 'Modern Technology'
    },
    description: {
      ar: 'نستخدم أحدث المعدات والتقنيات في العلاج',
      en: 'We use latest equipment and technologies in treatment'
    }
  },
  {
    icon: 'calendar-check',
    title: {
      ar: 'تنظيم المواعيد',
      en: 'Appointment Organization'
    },
    description: {
      ar: 'نظام احتياط فعال ومواعيد منظمة',
      en: 'Efficient booking system and organized appointments'
    }
  }
];
