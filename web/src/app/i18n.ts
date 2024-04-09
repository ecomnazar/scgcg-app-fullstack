import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tmJson from "@/shared/locale/tm/translation.json";
import ruJson from "@/shared/locale/ru/translation.json";
import enJson from "@/shared/locale/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    tm: { ...tmJson },
    ru: { ...ruJson },
    en: { ...enJson },
  }, // Where we're gonna put translations' files
  lng: "tm",
  fallbackLng: "tm",
});

export default i18n;
