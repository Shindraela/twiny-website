import React from 'react';
import styles from '../styles/footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr className={styles.footerSeparatorDesktop} />

      <div className={styles.footerLinksBlocks}>
        <div className={styles.footerLinksBlock}>
          <p className={styles.footerLinksBlockTitle}>Réseaux sociaux</p>

          <div className={styles.footerLinkNetworks}>
            <div className={styles.footerLinkImage}></div>
            <div className={styles.footerLinkImage}></div>
            <div className={styles.footerLinkImage}></div>
            <div className={styles.footerLinkImage}></div>
          </div>
        </div>

        <hr className={styles.footerSeparatorMobile} />

        <div className={styles.footerLinksBlock}>
          <p className={styles.footerLinksBlockTitle}>Ressources</p>

          <a
            href="#"
            className={styles.footerLink}
          >
            FAQ
          </a>
          <a
            href="#"
            className={styles.footerLink}
          >
            Conseils
          </a>
          <a
            href="#"
            className={styles.footerLink}
          >
            Contact
          </a>
        </div>

        <hr className={styles.footerSeparatorMobile} />

        <div className={styles.footerLinksBlock}>
          <p className={styles.footerLinksBlockTitle}>Légal</p>

          <a
            href="#"
            className={styles.footerLink}
          >
            Mentions légales
          </a>
          <a
            href="#"
            className={styles.footerLink}
          >
            Confidentialité
          </a>
          <a
            href="#"
            className={styles.footerLink}
          >
            Politique relative aux cookies
          </a>
          <a
            href="#"
            className={styles.footerLink}
          >
            Conditions d'utilisation
          </a>
        </div>
      </div>

      <hr className={styles.footerSeparatorDesktop} />

      <p className={styles.footerAllRightsReserved}>
        © Twiny 2024 | Tous droits réservés
      </p>
    </div>
  );
};
