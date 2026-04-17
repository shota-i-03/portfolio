"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/Loader.module.css";
import { motion, AnimatePresence } from "framer-motion";

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the loader for a stable 1.8 seconds on initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className={styles.loaderContainer}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className={styles.spinner}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
          <span className={styles.loadingText}>LOADING...</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
