import es from '../locales/es.json';

export type Translations = typeof es;

export interface LanguageContextType {
  text: 'es' | 'en';
  t: Translations; 
  switchLanguage: (lang: 'es' | 'en') => void;
}