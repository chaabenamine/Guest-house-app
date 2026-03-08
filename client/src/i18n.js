import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Maison Caméléon",
      book: "Book Now",
      experience: "Experiences"
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue à Maison Caméléon",
      book: "Réserver",
      experience: "Expériences"
    }
  },
  ar: {
    translation: {
      welcome: "مرحبا بكم في منزل الحرباء",
      book: "احجز الآن",
      experience: "التجارب"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;