import en from './en';
import ja from './ja';

import { createI18n } from 'vue-i18n';

const messages = {
  en,
  ja,
};

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});
