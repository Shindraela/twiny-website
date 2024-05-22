'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './menu.module.scss';
const twinyLogo = '/img/twiny.svg';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const downloadApp = () => console.log('downloadApp');

  return (
    <div className={styles.menu}>
      <div className={styles.menuToggleContainer}>
        <button
          className={`${styles.menuToggleButton} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.menuNav} ${isOpen ? styles.open : ''}`}>
          <li>
            <a href="#">En savoir plus</a>
          </li>
          <li>
            <a href="#">Sécurité</a>
          </li>
          <li>
            <a href="#">Assistance</a>
          </li>
          <li>
            <button className={styles.menuDownloadButton}>Télécharger</button>
          </li>
        </ul>

        {isOpen && (
          <div
            className={styles.menuOverlay}
            onClick={toggleMenu}
          ></div>
        )}

        <Image
          src={twinyLogo}
          priority
          width={90}
          height={30}
          alt="Twiny Logo"
          className={styles.menuLogo}
        />
      </div>

      <button
        className={styles.menuDownloadButton}
        onClick={downloadApp}
      >
        Télécharger
      </button>
    </div>
  );
};
