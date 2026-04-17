"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "ja" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ja: {
    "nav.home": "ホーム",
    "nav.about": "自己紹介",
    "nav.skills": "スキル",
    "nav.works": "実績",
    "nav.contact": "連絡先",
    "hero.name": "INAI SHOTA",
    "hero.subtitle": "京都大学大学院1回生",
    "about.title": "自己紹介",
    "skills.title": "スキル",
    "works.title": "実績",
    "contact.title": "連絡先",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.works": "Works",
    "nav.contact": "Contact",
    "hero.name": "INAI SHOTA",
    "hero.subtitle": "Kyoto University Graduate Student / Software Engineer",
    "about.title": "About Me",
    "skills.title": "Skills",
    "works.title": "Works",
    "contact.title": "Contact",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ja");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ja" ? "en" : "ja"));
  };

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
