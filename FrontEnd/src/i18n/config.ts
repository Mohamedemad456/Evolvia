import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

// Get language from localStorage or default to 'en'
const getStoredLanguage = (): string => {
  const stored = localStorage.getItem('language');
  return stored === 'ar' || stored === 'en' ? stored : 'en';
};

const initialLanguage = getStoredLanguage();

// Set initial HTML direction and language
if (typeof document !== 'undefined') {
  document.documentElement.dir = initialLanguage === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = initialLanguage;
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ar: {
        translation: arTranslations,
      },
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Save language to localStorage whenever it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
  if (typeof document !== 'undefined') {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  }
});

export default i18n;

