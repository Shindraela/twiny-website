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

        <div className={`${styles.menuNav} ${isOpen ? styles.open : ''}`}>
          <nav
            role="navigation"
            aria-label="Menu - liens principaux"
          >
            <ul>
              <li className={styles.menuItem}>
                <a
                  href="#"
                  className={styles.menuLink}
                >
                  En savoir plus
                </a>
              </li>
              <li className={styles.menuItem}>
                <a
                  href="#"
                  className={styles.menuLink}
                >
                  Sécurité
                </a>
              </li>
              <li className={styles.menuItem}>
                <a
                  href="#"
                  className={styles.menuLink}
                >
                  Assistance
                </a>
              </li>
            </ul>
          </nav>

          <div className={styles.menuFooter}>
            <button className={styles.menuLinkButton}>Télécharger</button>

            <ul className={styles.menuFooterLinks}>
              <li className={styles.menuLinkImage}></li>
              <li className={styles.menuLinkImage}></li>
              <li className={styles.menuLinkImage}></li>
              <li className={styles.menuLinkImage}></li>
            </ul>
          </div>
        </div>

        <div
          className={`${styles.menuOverlay} ${
            isOpen ? styles.menuOverlayOpen : ''
          }`}
          onClick={toggleMenu}
        ></div>

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
