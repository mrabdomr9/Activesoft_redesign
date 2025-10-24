
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const useTranslation = () => {
  // FIX: Destructure language from LanguageContext to make it available.
  const { translations, language } = useContext(LanguageContext);

  const t = (key: string, fallback?: any): any => {
    const keys = key.split('.');
    let result = translations;
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        return fallback !== undefined ? fallback : key;
      }
    }
    return result ?? (fallback !== undefined ? fallback : key);
  };

  // FIX: Return language from the hook.
  return { t, language };
};
