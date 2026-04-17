"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../../styles/Hero.module.css";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className={styles.heroSection}>
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className={styles.title}>{t("hero.name")}</h1>
        
        <div style={{ height: "40px", marginTop: "10px", fontSize: "1.4rem", color: "#e2e8f0", fontFamily: "monospace", display: "flex", alignItems: "center" }}>
           <span style={{ color: "#38bdf8", marginRight: "10px" }}>{">"}</span>
           <TypeAnimation
             sequence={['Software Engineer', 2500, 'Machine Learning Researcher', 2500, 'Kyoto University Graduate Student', 2500]}
             wrapper="span"
             speed={50}
             repeat={Infinity}
           />
        </div>

        <motion.div 
            className={styles.ctaContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a href="#about" className={styles.primaryBtn}>{t("nav.about")}</a>
          <a href="#contact" className={styles.secondaryBtn}>{t("nav.contact")}</a>
        </motion.div>
      </motion.div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};
