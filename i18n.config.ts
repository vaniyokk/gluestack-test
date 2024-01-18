import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./assets/locales";

const resources = {
  en
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // not needed for react!!
  },
  ns: ["common"]
});

export default i18n;
