"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../../styles/Contact.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const email = "shotainai03@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <motion.h2 
            className="section-title fade-in-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            {t("contact.title")}
        </motion.h2>

        <motion.div 
            className={`${styles.contactCard} glass-card`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <p className={styles.contactDesc}>
                {language === "ja" 
                    ? "ご連絡は以下のメールアドレス、またはGitHubからよろしくお願いいたします。" 
                    : "Please feel free to reach out to me via email or check out my GitHub below."}
            </p>
            
            <div className={styles.contactLinks}>
               <div className={styles.emailContainer}>
                   <a href={`mailto:${email}`} className={styles.contactLink}>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>{email}</span>
                   </a>
                   <button onClick={handleCopyEmail} className={styles.copyBtn} aria-label="Copy Email">
                      <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                   </button>
               </div>
               
               <a href="https://github.com/shota-i-03" target="_blank" rel="noopener noreferrer" className={styles.contactLink} style={{width: "100%", maxWidth: "400px", justifyContent: "center"}}>
                  <FontAwesomeIcon icon={faGithub} />
                  <span>github.com/shota-i-03</span>
               </a>
            </div>
        </motion.div>
      </div>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Shota Inai. All rights reserved.</p>
      </footer>
    </section>
  );
};
