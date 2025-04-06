import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import emoji from "i18next-emoji-postprocessor";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translationEn from "zod-i18n-map/locales/en/zod.json";
import translationEs from "zod-i18n-map/locales/es/zod.json";
export const defaultNS = "common";

if (!import.meta.env.vitest) {
  const localResources = {
    es: { zod: translationEs },
    en: { zod: translationEn },
  };
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    // .use(emoji)
    .use(ChainedBackend)
    .init({
      // postProcess: "emoji",
      fallbackLng: "es",
      load: "languageOnly",
      debug: false,
      ns: [
        "common",
        "login",
        "error",
      ],
      defaultNS,
      backend: {
        backends: [resourcesToBackend(localResources), HttpBackend],
      },
    });

  i18next.services.formatter?.add("capitalize", (value, _lng, _options) => {
    return `${value?.substr(0, 1)?.toUpperCase()}${value?.substr(1)}`;
  });
  z.setErrorMap(zodI18nMap);
}

export { i18next };
