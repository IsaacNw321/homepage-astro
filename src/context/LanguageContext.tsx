import React, { createContext, useState, useEffect, useContext, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';
import type { Translations, LanguageContextType } from '../types/';


const defaultTranslations: Translations = en as Translations; 
const defaultContextValue: LanguageContextType = {
  language: 'en',
  t: defaultTranslations,
  switchLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export function useT(): LanguageContextType {
  return useContext(LanguageContext);
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'es' | 'en'>('en');
  const [translations, setTranslations] = useState<Translations>(es as Translations);

useEffect(() => {
    if (typeof window !== 'undefined') {
        const userLanguage = window.navigator.language;
        const initialLang = userLanguage.startsWith('es') ? 'es' : 'en';
        setLanguage(initialLang);
        setTranslations(initialLang === 'es' ? (es as Translations) : (en as Translations));
    }
  }, []);

 const switchLanguage = useCallback((lang: 'es' | 'en') => {
    setLanguage(lang);
    setTranslations(lang === 'es' ? (es as Translations) : (en as Translations));
    console.log('Language Switched to:', lang);
  }, []);
  
 const contextValue = useMemo(() => ({
    language,
    t: translations, 
    switchLanguage,
  }), [language, translations, switchLanguage]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};