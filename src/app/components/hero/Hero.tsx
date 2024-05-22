import React from 'react';
import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.background}></div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          Trouve des amis, crée des souvenirs ! 🌟🤝
        </h3>

        <button className={styles.button}>En savoir plus</button>
      </div>
    </div>
  );
};
