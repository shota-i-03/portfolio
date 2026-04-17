"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../../styles/About.module.css";
import { motion } from "framer-motion";

export const About = () => {
  const { t, language } = useLanguage();

  const profile = language === "ja" ? {
    name: "稲井 翔太 (INAI SHOTA)",
    birth: "生年月日：2003年2月21日",
    origin: "出身地：愛知県",
    body: "身長：172cm / 62kg",
    benchPress: "ベンチプレスMAX：82.5kg",
    affiliation: (
      <>
        現所属：京都大学大学院 工学研究科機械理工学専攻{" "}
        <a href="https://material.me.kyoto-u.ac.jp/ja/" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8", textDecoration: "underline" }}>
          材料物性学研究室
        </a>
      </>
    )
  } : {
    name: "Shota Inai",
    birth: "Born: February 21, 2003",
    origin: "Birthplace: Aichi Prefecture",
    body: "Height/Weight: 172cm / 62kg",
    benchPress: "Bench Press Max: 82.5kg",
    affiliation: (
      <>
        Affiliation: Kyoto University Graduate School, Engineering,{" "}
        <a href="https://material.me.kyoto-u.ac.jp/ja/" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8", textDecoration: "underline" }}>
          Materials Physics Lab
        </a>
      </>
    )
  };

  const timelineEvents = language === "ja" ? [
    { year: "2022", org: "京都大学 工学部 物理工学科", desc: "授業にて人生で初めてプログラミング(Python)に触れる" },
    { year: "2023", org: "京都大学 工学部 物理工学科", desc: "プログラミング教室に通い、機械学習を用いたゴルフスイング解析アプリを開発した。" },
    { year: "2024", org: "京都大学 工学部 物理工学科 / GeekSalon", desc: "GeekSalon（大学生向けプログラミング教室）にて長期インターンとして、AIコースのリーダーを1年経験。機械学習を用いたアプリの開発を支援する側にたつ。" },
    { year: "2025", org: (
      <>京都大学 工学部 物理工学科 / <a href="https://www.starup01.jp/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>株式会社STAR UP</a></>
    ), desc: (
      <>材料物性学研究室所属。これまで学部時代に学んだ機械学習について研究でさらに深く学びたいと思い、材料×データ科学を主とする研究室に配属。さらに、学部で学んだプログラミングが実務でどう活かされるのか知りたいと思い、2025年1月に<a href="https://www.starup01.jp/" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8", textDecoration: "underline" }}>株式会社STAR UP</a>に入社。</>
    ) },
    { year: "2026", org: "京都大学大学院 工学研究科 機械理工学専攻", desc: "大学院入試を突破し、同研究室で機械学習を用いた材料特性の解明を研究。" },
  ] : [
    { year: "2022", org: "Kyoto University, Faculty of Engineering", desc: "Touched programming (Python) for the first time in life during a class." },
    { year: "2023", org: "Kyoto University, Faculty of Engineering", desc: "Attended a programming school and developed a golf swing analysis app using machine learning." },
    { year: "2024", org: "Kyoto University / GeekSalon", desc: "Experienced 1 year as an AI course leader in a long-term internship at GeekSalon. Stood on the side of supporting the development of apps using machine learning." },
    { year: "2025", org: (
      <>Kyoto University / <a href="https://www.starup01.jp/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>STAR UP Inc.</a></>
    ), desc: (
      <>Affiliated with Materials Physics Lab to learn ML deeply in a materials x data science field. Joined <a href="https://www.starup01.jp/" target="_blank" rel="noopener noreferrer" style={{ color: "#38bdf8", textDecoration: "underline" }}>STAR UP Inc.</a> as an intern in Jan 2025 to experience practical programming applications.</>
    ) },
    { year: "2026", org: "Kyoto University Graduate School", desc: "Passed the graduate school entrance exam and researched the elucidation of material properties using machine learning." },
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.h2 
            className="section-title fade-in-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            {t("about.title")}
        </motion.h2>
        
        <motion.div 
            className={`${styles.profileContent} glass-card fade-in-up`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h3 style={{fontSize: "1.4rem", marginBottom: "1rem", color: "#fff"}}>{profile.name}</h3>
            <p>{profile.birth}</p>
            <p>{profile.origin}</p>
            <p>{profile.body}</p>
            <p>{profile.benchPress}</p>
            <p>{profile.affiliation}</p>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          {timelineEvents.map((item, index) => (
            <motion.div 
                key={index} 
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
            >
              <div className={styles.timelineDot}></div>
              <div className={`${styles.timelineContent} glass-card`}>
                <span className={styles.year}>{item.year}</span>
                <h3 style={{ fontSize: "1.1rem", color: "#38bdf8", marginBottom: "0.5rem" }}>{item.org}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
