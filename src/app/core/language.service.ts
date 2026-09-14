import { Injectable, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

export type Language = 'ar' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private document = inject(DOCUMENT);
  
  private readonly STORAGE_KEY = 'clinic-language';
  
  currentLang = signal<Language>('ar'); // Arabic-first, RTL by default
  
  constructor() {
    this.loadLanguage();
  }
  
  private loadLanguage(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY) as Language;
    if (saved && (saved === 'ar' || saved === 'en')) {
      this.setLanguage(saved, false);
    } else {
      this.setLanguage('ar', false);
    }
  }
  
  setLanguage(lang: Language, save = true): void {
    this.currentLang.set(lang);
    
    const html = this.document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    if (save) {
      localStorage.setItem(this.STORAGE_KEY, lang);
    }
  }
  
  toggleLanguage(): void {
    const newLang = this.currentLang() === 'ar' ? 'en' : 'ar';
    this.setLanguage(newLang);
  }
  
  isRTL(): boolean {
    return this.currentLang() === 'ar';
  }
  
  getText(ar: string, en: string): string {
    return this.currentLang() === 'ar' ? ar : en;
  }
}
