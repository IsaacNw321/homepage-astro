import React, { createContext, useState, useEffect, useContext, useMemo, useCallback } from 'react';
import type { ReactNode } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';
import type { Translations, LanguageContextType } from '../types/';


const defaultTranslations: Translations = es as Translations;
const defaultContextValue: LanguageContextType = {
  text: 'es',
  t: defaultTranslations,
  switchLanguage: () => { },
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export function useT(): LanguageContextType {
  return useContext(LanguageContext);
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [text, setText] = useState<'es' | 'en'>('es');
    const [translations, setTranslations] = useState<Translations>(es as Translations);

    useEffect(() => {
        const userLanguage = window.navigator.language;
        const initialLang = userLanguage.startsWith('es') ? 'es' : 'en';
        
        setText(initialLang);
        setTranslations(initialLang === 'es' ? (es as Translations) : (en as Translations));
    }, []);


    const switchLanguage = useCallback((lang: 'es' | 'en') => {
        if (text === lang) return; 
        setText(lang);
        setTranslations(lang === 'es' ? (es as Translations) : (en as Translations));
    }, [text]); 

    const contextValue = useMemo(() => ({
        text,
        t: translations,
        switchLanguage,
    }), [text, translations, switchLanguage]);

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};