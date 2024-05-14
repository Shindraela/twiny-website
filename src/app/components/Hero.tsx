import React from 'react';
import styles from '../styles/hero.module.scss';
// const heroBg = '../../../public/img/header-background.png';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div
        className={styles.background}
        // style={{ backgroundImage: `url(${heroBg.src})` }}
      ></div>

      <div className={styles.content}>
        <h3 className={styles.textContainer}>
          Trouve des amis, crée des souvenirs !{' '}
          <span
            role="img"
            aria-label="Étoile"
          >
            🌟
          </span>
          <span
            role="img"
            aria-label="Poignée de main"
          >
            🤝
          </span>
        </h3>

        <button className={styles.button}>En savoir plus</button>
      </div>
    </div>
  );
};
