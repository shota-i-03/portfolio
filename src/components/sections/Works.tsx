"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "../../styles/Works.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faInfoCircle, faChevronLeft, faChevronRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../ui/Modal";

type Project = {
  id: number;
  titleJa: string;
  titleEn: string;
  contextJa: string;
  contextEn: string;
  imageUrl?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  youtubeUrl?: string;
  descriptionJa: string;
  descriptionEn: string;
  images?: string[];
  videoUrl?: string;
  teamSize?: string;
  period?: string;
  featuresJa?: string[];
  featuresEn?: string[];
  responsibilitiesJa?: string[];
  responsibilitiesEn?: string[];
};

export const Works = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isVideoExpanded, setIsVideoExpanded] = React.useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsVideoExpanded(false);
  };

  const handleNextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      titleJa: "ポートフォリオサイト",
      titleEn: "Portfolio Website",
      imageUrl: "/portfolio.png",
      contextJa: "個人開発",
      contextEn: "Personal Development",
      tags: ["Next.js", "TypeScript"],
      githubUrl: "https://github.com/shota-i-03",
      liveUrl: "#",
      descriptionJa: "React、Next.js、TypeScriptを用いたポートフォリオサイトです。CSS Modulesによるスタイリング、Framer Motionによるアニメーション、多言語対応（日/英）を実装しています。",
      descriptionEn: "A portfolio site built with React, Next.js, and TypeScript. Implemented styling with CSS Modules, animations with Framer Motion, and multi-language support (JP/EN).",
      teamSize: "1人",
      period: "2026/04/14 - 2026/04/16"
    },
    {
      id: 2,
      titleJa: "発注業務支援アプリ",
      titleEn: "Ordering Support App",
      imageUrl: "/order1.png",
      contextJa: "チーム開発",
      contextEn: "Team Development",
      tags: ["Next.js", "TypeScript", "FastAPI", "+2"],
      descriptionJa: "株式会社STAR UPでの長期インターンプロジェクト。 某大手エンタメ企業や某大手通信キャリアに向け、商品の売上データや各店舗のイベント情報など分析して需要予測を行い、最適な発注量の提案を行うアプリケーションを開発。 主にフロントエンドエンジニアとしてUI/UX実装を担当。\n追加開発フェーズでは、一部機能について要件定義を元に「詳細設計→DB修正→新規API実装→UI/UX実装」まで一気通貫で担当。",
      descriptionEn: "A long-term internship project at STAR UP Inc. Developed an application for major entertainment companies and telecommunication carriers that analyzes sales data and store event information to perform demand forecasting and suggest optimal order volumes. Mainly responsible for UI/UX implementation as a frontend engineer. During the additional development phase, handled end-to-end tasks from detailed design and DB modification to new API implementation and UI/UX implementation for certain features based on requirements definitions.",
      images: ["/order1.png", "/order2.png", "/order3.png"],
      teamSize: "9人（フロントエンド3人）",
      period: "2025/01 - 2026/01",
      featuresJa: ["在庫商品の管理", "売上予測の可視化", "需要予測を組み込んだ発注量提案"],
      featuresEn: ["Inventory management", "Visualization of sales forecasting", "Ordering suggestions incorporating demand forecasting"],
      responsibilitiesJa: ["UI/UX実装", "API実装"],
      responsibilitiesEn: ["UI/UX implementation", "API implementation"]
    },
    {
      id: 3,
      titleJa: "集団相性診断Webアプリ",
      titleEn: "Group Compatibility Diagnosis Web App",
      imageUrl: "/compatibility1.png",
      contextJa: "ハッカソン",
      contextEn: "Hackathon",
      tags: ["React", "TypeScript", "Supabase"],
      githubUrl: "https://github.com/shota-i-03/team_a",
      descriptionJa: "ハッカソンにて開発した、複数人の性格や価値観の相性を診断・可視化するアプリです。Supabaseをデータベースおよび認証に利用し、リアルタイムでの集計・表示を可能にしました。短期間での開発においてチームでの役割分担とスピード感を重視しました。",
      descriptionEn: "Developed during a hackathon, this app diagnoses and visualizes character and value compatibility among multiple people. Used Supabase for database and auth to enable real-time aggregation and display.",
      images: ["/compatibility1.png", "/compatibility3.png", "/compatibility4.ong.webp"],
      teamSize: "3人",
      period: "2025/03 (1週間)",
      featuresJa: ["個人間のGeminiによる相性診断", "集団間のGemini相性診断"],
      featuresEn: ["Individual compatibility diagnosis using Gemini", "Group compatibility diagnosis using Gemini"],
      responsibilitiesJa: ["UI/UX実装", "Supabase、Geminiとの接続"],
      responsibilitiesEn: ["UI/UX implementation", "Integrating Supabase and Gemini"]
    },
    {
      id: 4,
      titleJa: "思考力深化Chatアプリ",
      titleEn: "Deep Thinking Chat App",
      imageUrl: "/thinkdeeply.png",
      contextJa: "ハッカソン",
      contextEn: "Hackathon",
      tags: ["React", "TypeScript", "Supabase"],
      githubUrl: "https://github.com/shota-i-03/mind-expand-lab",
      liveUrl: "https://mind-expand-lab.vercel.app",
      youtubeUrl: "https://youtu.be/HJec9ruDNUs?si=tP9EaJ80kb36IASZ",
      descriptionJa: "「ThinkDeeply」は、ユーザーの思考を深めるための対話型AIチャットアプリです。AIが適切な問いかけを行うことで、自分一人では到達できない気づきを促します。ハッカソンにて開発し、技術的な挑戦として高度なプロンプトエンジニアリングを組み込みました。",
      descriptionEn: "ThinkDeeply is an interactive AI chat app designed to deepen user thinking. The AI provides appropriate prompts to encourage insights one might not reach alone. Developed at a hackathon, incorporating advanced prompt engineering as a technical challenge.",
      images: ["/thinkdeeply.png", "/thinkdeeply1.png", "/thinkdeeply2.png", "/thinkdeeply3.png"],
      teamSize: "2人",
      period: "2025/11 - 2025/12",
      featuresJa: ["AIによる対話型の思考深化サポート", "適切な問いかけによる気づきの促進", "プロンプトエンジニアリングを活用した高度なAIレスポンス"],
      featuresEn: ["Interactive support for deepening thinking through AI", "Encouraging insights through appropriate prompts", "Advanced AI responses using prompt engineering"],
      responsibilitiesJa: ["UI/UX実装", "Supabase、Geminiとの接続", "プロジェクト進行管理、タスク管理、タスク振り分け"],
      responsibilitiesEn: ["UI/UX implementation", "Integrating Supabase and Gemini", "Project management, task management, and task allocation"]
    },
    {
      id: 5,
      titleJa: "ゴルフスイング解析アプリ",
      titleEn: "Golf Swing Analysis App",
      imageUrl: "/golf1.png",
      contextJa: "個人開発",
      contextEn: "Personal Development",
      tags: ["Python", "Flask", "HTML/CSS"],
      githubUrl: "https://github.com/shota-i-03/Golf",
      descriptionJa: "授業で触れたプログラミングをきっかけに開発した、機械学習を用いてゴルフスイングを解析するアプリケーションです。動画からスイングの骨格情報を抽出し、改善ポイントをフィードバックします。プログラミング教室での最初の大きな製作物です。",
      descriptionEn: "An application using machine learning to analyze golf swings, developed following exposure to programming in class. Extracts skeletal information from videos and provides feedback on improvement points.",
      images: ["/golf1.png", "/golf2.png", "/golf3.png"],
      videoUrl: "/golf.mp4",
      teamSize: "1人",
      period: "2025/01 - 2025/03",
      featuresJa: ["動画からのスイング比較と可視化", "機械学習を用いたスイング分析とフィードバック"],
      featuresEn: ["Swing comparison and visualization from videos", "Swing analysis and feedback using machine learning"],
      responsibilitiesJa: ["Python/Flaskを用いたサーバーサイド実装", "HTML/CSSによるフロントエンド実装"],
      responsibilitiesEn: ["Server-side implementation using Python/Flask", "Front-end implementation with HTML/CSS"]
    }
  ];

  return (
    <section id="works" className={styles.worksSection}>
      <div className={styles.container}>
        <motion.h2 
            className="section-title fade-in-up"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
        >
            {t("works.title")}
        </motion.h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`${styles.projectCard} glass-card`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.projectHeader}>
                 <div className={styles.titleRow}>
                    <h3>{language === "ja" ? project.titleJa : project.titleEn}</h3>
                    <div className={styles.projectLinks}>
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                               <FontAwesomeIcon icon={faGithub} />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                               <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </a>
                        )}
                        {project.youtubeUrl && (
                            <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#ff0000" }}>
                               <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        )}
                    </div>
                 </div>
                 
                 {project.imageUrl && (
                     <div className={styles.projectImageWrapper}>
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img src={project.imageUrl} alt={project.titleEn} className={styles.projectImage} />
                     </div>
                 )}

                 {(project.contextJa || project.contextEn) && (
                     <span className={styles.projectContext}>
                         {language === "ja" ? project.contextJa : project.contextEn}
                     </span>
                 )}
                <div className={styles.cardFooter}>
                  <button 
                    className={styles.detailsButton}
                    onClick={() => handleOpenModal(project)}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: "8px" }} />
                    {language === "ja" ? "詳細を見る" : "Details"}
                  </button>
                </div>
              </div>
              <div className={styles.tagsContainer}>
                 {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={styles.tag}>{tag}</span>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
        <Modal 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)}
        >
          {selectedProject && (
            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>
                {language === "ja" ? selectedProject.titleJa : selectedProject.titleEn}
              </h2>
              
              <div className={styles.modalContext}>
                {language === "ja" ? selectedProject.contextJa : selectedProject.contextEn}
              </div>

              <div className={styles.modalSliderContainer}>
                {selectedProject.videoUrl && (
                  <div className={styles.videoSection}>
                    {!isVideoExpanded ? (
                      <button 
                        className={styles.watchVideoButton}
                        onClick={() => setIsVideoExpanded(true)}
                      >
                        <FontAwesomeIcon icon={faPlayCircle} style={{ marginRight: "8px" }} />
                        {language === "ja" ? "デモ動画を見る" : "Watch Demo Video"}
                      </button>
                    ) : (
                      <div className={styles.modalVideoWrapper}>
                        <video 
                          src={selectedProject.videoUrl} 
                          controls 
                          autoPlay 
                          className={styles.modalVideo}
                        />
                        <button 
                          className={styles.closeVideoButton}
                          onClick={() => setIsVideoExpanded(false)}
                        >
                          {language === "ja" ? "動画を閉じる" : "Close Video"}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {selectedProject.images && selectedProject.images.length > 1 ? (
                  <div className={styles.sliderWrapper}>
                    <button className={styles.sliderBtnPrev} onClick={handlePrevImage}>
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    
                    <div className={styles.modalImageWrapper}>
                      <motion.img 
                        key={currentImageIndex}
                        src={selectedProject.images[currentImageIndex]} 
                        alt={`${selectedProject.titleEn} image ${currentImageIndex + 1}`} 
                        className={styles.modalImage}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <button className={styles.sliderBtnNext} onClick={handleNextImage}>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                    <div className={styles.imageCounter}>
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>
                ) : (
                  selectedProject.imageUrl && (
                    <div className={styles.modalImageWrapper}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={selectedProject.imageUrl} alt={selectedProject.titleEn} className={styles.modalImage} />
                    </div>
                  )
                )}
              </div>

              <div className={styles.modalDescription}>
                {language === "ja" ? selectedProject.descriptionJa : selectedProject.descriptionEn}
              </div>

              {(selectedProject.featuresJa || selectedProject.responsibilitiesJa) && (
                <div className={styles.modalDetailsGrid}>
                  {selectedProject.featuresJa && (
                    <div className={styles.detailSection}>
                      <h4 className={styles.detailTitle}>{language === "ja" ? "主な機能" : "Key Features"}</h4>
                      <ul className={styles.detailList}>
                        {(language === "ja" ? selectedProject.featuresJa : selectedProject.featuresEn || selectedProject.featuresJa).map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedProject.responsibilitiesJa && (
                    <div className={styles.detailSection}>
                      <h4 className={styles.detailTitle}>{language === "ja" ? "担当範囲" : "Responsibilities"}</h4>
                      <ul className={styles.detailList}>
                        {(language === "ja" ? selectedProject.responsibilitiesJa : selectedProject.responsibilitiesEn || selectedProject.responsibilitiesJa).map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div className={styles.modalTags}>
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className={styles.modalTag}>{tag}</span>
                ))}
              </div>

              <div className={styles.modalMetaInfo}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{language === "ja" ? "期間" : "Period"}:</span>
                  <span className={styles.metaValue}>{selectedProject.period}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{language === "ja" ? "チーム規模" : "Team Size"}:</span>
                  <span className={styles.metaValue}>{selectedProject.teamSize}</span>
                </div>
              </div>

              <div className={styles.modalActions}>
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: "8px" }} />
                    GitHub
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginRight: "8px" }} />
                    {language === "ja" ? "サイトを見る" : "Live Demo"}
                  </a>
                )}
                {selectedProject.youtubeUrl && (
                  <a href={selectedProject.youtubeUrl} target="_blank" rel="noopener noreferrer" className={`${styles.actionBtn} ${styles.youtubeBtn}`}>
                    <FontAwesomeIcon icon={faYoutube} style={{ marginRight: "8px" }} />
                    YouTube
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
