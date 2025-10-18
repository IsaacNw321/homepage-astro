import es from '../locales/es.json';

export type Translations = typeof es;

export interface LanguageContextType {
  language: 'es' | 'en';
  t: Translations; 
  switchLanguage: (lang: 'es' | 'en') => void;
}