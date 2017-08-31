const locales = ['en', 'de', 'ja', 'en-GB'];

require('devextreme-intl');

const { loadMessages, locale } = require('devextreme/localization');

const shorten = l => l.replace(/-.*$/, '');
new Set(locales.map(shorten).filter(i => i !== 'en')).forEach(locale =>
  loadMessages(require(`devextreme/localization/messages/${locale}.json`))
);

// Setting locale depending on browser settings, taking into account
// available locales.
const requestedLocale = navigator.language || navigator.browserLanguage;
const setLocale =
  locales.find(i => i === requestedLocale) ||
  locales.find(i => i === shorten(requestedLocale)) ||
  'en';
locale(setLocale);

// Alternatively, set a specific locale:
// locale('de');
