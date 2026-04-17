"use client";

import React from "react";
import styles from "../styles/Navigation.module.css";
import { useLanguage } from "../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Navigation = () => {
  const { t, language, toggleLanguage } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // offset for sticky nav
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <a href="#hero" onClick={(e) => scrollToSection(e, "hero")}>SI.</a>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about" onClick={(e) => scrollToSection(e, "about")}>{t("nav.about")}</a></li>
          <li><a href="#skills" onClick={(e) => scrollToSection(e, "skills")}>{t("nav.skills")}</a></li>
          <li><a href="#works" onClick={(e) => scrollToSection(e, "works")}>{t("nav.works")}</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>{t("nav.contact")}</a></li>
        </ul>
        <div className={styles.navActions}>
          <button className={styles.langToggle} onClick={toggleLanguage}>
            {language === "ja" ? "EN" : "JA"}
          </button>
          <a href="https://github.com/shota-i-03" target="_blank" rel="noopener noreferrer" className={styles.githubIcon}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </nav>
  );
};
