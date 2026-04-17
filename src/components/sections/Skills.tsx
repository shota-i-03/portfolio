"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../../styles/Skills.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

type Skill = {
  name: string;
  rating?: number; // 1 to 4, optional for things like TOEFL
  label?: string; // fallback text if no rating
  iconCode?: string; // identifier for skillicons.dev
};

export const Skills = () => {
  const { t, language } = useLanguage();

  const languageSkills: Skill[] = [
    { name: "TypeScript", rating: 3, iconCode: "ts" },
    { name: "Python", rating: 3, iconCode: "python" },
    { name: "HTML", rating: 3, iconCode: "html" },
    { name: "CSS", rating: 3, iconCode: "css" },
    { name: "JavaScript", rating: 2, iconCode: "js" },
    { name: "Ruby", rating: 1, iconCode: "ruby" },
  ];

  const frameworkSkills: Skill[] = [
    { name: "Next.js", rating: 3, iconCode: "nextjs" },
    { name: "Tailwind CSS", rating: 3, iconCode: "tailwind" },
    { name: "React", rating: 2, iconCode: "react" },
    { name: "Ruby on Rails", rating: 1, iconCode: "rails" },
    { name: "FastAPI", rating: 1, iconCode: "fastapi" },
  ];

  const infraSkills: Skill[] = [
    { name: "Supabase", rating: 2, iconCode: "supabase" },
    { name: "Docker", rating: 2, iconCode: "docker" },
    { name: "PostgreSQL", rating: 1, iconCode: "postgres" },
  ];

  const otherSkills: Skill[] = [
    { name: "Git / GitHub", rating: 3, iconCode: "github" },
    { name: "TOEFL iBT", label: "70" },
  ];

  const skillDescriptions = language === "ja" ? [
    { stars: 4, label: "リードレベル", desc: "複雑な問題解決やシステム設計を主導し、メンバーの指導もできる。" },
    { stars: 3, label: "実務レベル", desc: "チームの一員として自律的に担当業務の開発を進めることができる。研究や長期インターン等で継続的に用いている。" },
    { stars: 2, label: "基礎開発レベル", desc: "自力で調べながら、小規模で単純なアプリケーションや機能を作成できる。開発で用いたことがある。" },
    { stars: 1, label: "入門レベル", desc: "学部や院の授業で触れ、基本的な操作ができる。" },
  ] : [
    { stars: 4, label: "Lead Level", desc: "Can lead complex problem solving and system design, and mentor members." },
    { stars: 3, label: "Practical Level", desc: "Can autonomously advance development tasks. Continuously used in research or internships." },
    { stars: 2, label: "Basic Level", desc: "Can create small applications while researching independently. Has used in development." },
    { stars: 1, label: "Entry Level", desc: "Touched in classes and can perform basic operations." },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 4; i++) {
        stars.push(
          <FontAwesomeIcon 
            key={i} 
            icon={i <= rating ? faStar : faStarRegular} 
            className={i <= rating ? styles.starFilled : styles.starEmpty}
          />
        );
    }
    return <div className={styles.starsContainer}>{stars}</div>;
  };

  const renderSkillCategory = (title: string, skills: Skill[], delay: number) => (
    <motion.div 
        className={`${styles.skillCategory} glass-card`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay }}
    >
      <h3 className={styles.categoryTitle}>{title}</h3>
      <div className={styles.skillList}>
         {skills.map((skill, index) => (
             <div key={index} className={styles.skillItem}>
                 <div className={styles.skillNameWrapper}>
                     {skill.iconCode && (
                         /* eslint-disable-next-line @next/next/no-img-element */
                         <img 
                            src={`https://skillicons.dev/icons?i=${skill.iconCode}`} 
                            alt={`${skill.name} icon`} 
                            className={styles.skillIcon} 
                         />
                     )}
                     <span className={styles.skillName}>{skill.name}</span>
                 </div>
                 {skill.rating !== undefined ? renderStars(skill.rating) : <span className={styles.skillLabel}>{skill.label}</span>}
             </div>
         ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <motion.h2 
            className="section-title fade-in-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            {t("skills.title")}
        </motion.h2>

        <motion.div 
            className={`${styles.legendCard} glass-card fade-in-up`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className={styles.legendTitle}>{language === "ja" ? "スキルレベルの目安" : "Skill Level Guide"}</h3>
          <ul className={styles.legendList}>
            {skillDescriptions.map((desc, i) => (
              <li key={i} className={styles.legendItem}>
                <div className={styles.legendHeader}>
                    {renderStars(desc.stars)}
                    <span className={styles.legendLabel}>{desc.label}</span>
                </div>
                <p className={styles.legendDesc}>{desc.desc}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className={styles.skillsGrid}>
            {renderSkillCategory(language === "ja" ? "言語" : "Language", languageSkills, 0.2)}
            {renderSkillCategory(language === "ja" ? "フレームワーク" : "Framework", frameworkSkills, 0.3)}
            {renderSkillCategory(language === "ja" ? "インフラ" : "Infrastructure", infraSkills, 0.4)}
            {renderSkillCategory(language === "ja" ? "その他" : "Others", otherSkills, 0.5)}
        </div>
      </div>
    </section>
  );
};
