import React, { createContext, useState, useEffect, ReactNode, useMemo } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: any;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  setLanguage: () => {},
  translations: {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language');
    return (savedLang === 'en' || savedLang === 'ar') ? savedLang : 'ar';
  });
  
  const [translations, setTranslations] = useState<any>({});
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Effect for loading translations when language changes or on initial mount
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        // Paths must be relative to the public directory (where index.html is)
        const response = await fetch(`./locales/${language}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load translations for ${language}`);
        }
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error(error);
        setTranslations({}); // Fallback to an empty object if loading fails
      } finally {
        if (isInitialLoading) {
            setIsInitialLoading(false);
        }
      }
    };

    fetchTranslations();
  }, [language, isInitialLoading]);

  // Effect for updating document attributes
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    translations,
  }), [language, translations]);
  
  // Show a loading indicator only on the very first load
  if (isInitialLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#0a0a1a',
        color: 'white',
        fontFamily: 'sans-serif',
        fontSize: '1.2rem'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
