import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./language/en.json";
import de from "./language/de.json";
import renderHTML from "react-render-html";

const fallbackLng = ["en"];
const availableLanguages = ["en", "de"];

const resources = {
    en: {
        translation: en
    },
    de: {
        translation: de
    },
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,
        detection: {
            checkWhitelist: true
        },
        debug: false,
        whitelist: availableLanguages,
        interpolation: {
            escapeValue: false
        },
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'b', 'u'],
    });

export default i18n;
