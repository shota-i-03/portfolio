"use client";

import React from 'react';
import styles from '../styles/ShootingStars.module.css';

export const ShootingStars = () => {
  return (
    <div className={styles.starsContainer}>
      <div className={styles.star}></div>
      <div className={styles.star}></div>
      <div className={styles.star}></div>
      <div className={styles.star}></div>
      <div className={styles.star}></div>
    </div>
  );
};
