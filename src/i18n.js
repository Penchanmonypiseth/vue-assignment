import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import km from './locales/km.json';

let currentLanguage = process.env.VUE_APP_I18N_LOCALE || 'en';
let fallbackLanguage = process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'km';

const i18n = createI18n({
  locale: currentLanguage,
  fallbackLocale: fallbackLanguage,
  messages: {
    en: en,
    km: km,
  },
});

export default i18n;
