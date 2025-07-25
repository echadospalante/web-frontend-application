import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationsEN from './en/translation.json';
import translationsES from './es/translation.json';

const resources = {
  // gr: {
  //   translation: translationGr,
  // },
  // it: {
  //   translation: translationIT,
  // },
  // rs: {
  //   translation: translationRS,
  // },
  es: {
    translation: translationsES,
  },
  en: {
    translation: translationsEN,
  },
};

const language = localStorage.getItem('I18N_LANGUAGE');
if (!language) {
  localStorage.setItem('I18N_LANGUAGE', 'en');
}

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('I18N_LANGUAGE') || 'en',
    fallbackLng: 'en', // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
