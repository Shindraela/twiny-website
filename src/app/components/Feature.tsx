import React from 'react';
import Image from 'next/image';
import styles from '../styles/feature.module.scss';
import { supportsWebP } from '../utils';
import imageWebP from '/public/img/feature@4x.webp';
import imageJpg from '/public/img/feature@4x.jpg';

export const Feature = () => {
  return (
    <div className={styles.feature}>
      <div className={styles.featureImage}>
        <Image
          src={imageWebP}
          alt="Image WebP"
          width={300}
          height={804}
        />
        {/* Utilisation conditionnelle pour l'image alternative au format JPG */}
        {!supportsWebP() && (
          <Image
            src={imageJpg}
            alt="Image Responsive (JPG)"
            width={300}
            height={804}
          />
        )}
      </div>

      <div className={styles.featureTexts}>
        <h2 className={styles.featureTitle}>Trouve ton âme-soeur platonique</h2>

        <p className={styles.featureParagraph}>
          Salut toi, enfin une appli qui fait matcher les âmes sœurs de
          l&apos;amitié ! Imagine Tinder, mais pour trouver ton nouveau meilleur
          pote, ta complice de folies ou ton acolyte pour partager des aventures
          inoubliables. Adieu solitude, bonjour amitié ! Fais glisser vers la
          droite pour des rencontres amicales sensationnelles ! 🎉🤝
        </p>

        <button className={styles.featureButton}>En savoir plus</button>
      </div>
    </div>
  );
};
