import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import it from './locales/it/translation.json'
import ru from './locales/ru/translation.json'

const resources = {
  it: {
      translation: it,
  },
  ru:{
      translation:ru,
  }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng') : 'ru',
    debug: false,
    detection: {
      order: ['localStorage', 'cookie'],
      cache: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
