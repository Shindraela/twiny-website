import React from 'react';
import Image from 'next/image';
import { supportsWebP } from '../../utils';
import styles from './community.feature.module.scss';
import imageWebP from '/public/img/community_feature@4x.webp';
import imageJpg from '/public/img/community_feature@4x.jpg';

export const CommunityFeature = () => {
  return (
    <div className={styles.communityFeature}>
      <div className={styles.communityFeatureImage}>
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

      <div className={styles.communityFeatureTexts}>
        <h2 className={styles.communityFeatureTitle}>
          Swipe, match et tisse des amitiés pour la vie
        </h2>

        <p className={styles.communityFeatureParagraph}>
          Découvre notre fonctionnalité de communauté dynamique ! Participe à
          des discussions de groupe sur des sujets qui te passionnent, que ce
          soit les voyages, la musique ou la cuisine. C&apos;est l&apos;occasion
          parfaite pour rencontrer de nouvelles personnes partageant tes
          intérêts. Rejoins-nous et élargis ton cercle d&apos;amis en discutant
          de ce que tu aimes le plus !
        </p>

        <button className={styles.communityFeatureButton}>
          En savoir plus
        </button>
      </div>
    </div>
  );
};
