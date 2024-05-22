import React from 'react';
import Image from 'next/image';
import styles from './catch.phrase.module.scss';
import emojis from '/public/img/emojis.png';

export const CatchPhrase = () => {
  return (
    <div className={styles.catchPhrase}>
      <div className={styles.catchPhraseContainer}>
        <h2 className={styles.catchPhraseTitle}>
          Enfin une appli qui fait matcher les âmes sœurs de l&apos;amitié !
        </h2>

        <Image
          className={styles.catchPhraseEmojis}
          src={emojis}
          alt="Emojis étoile et poignée de main"
          width={68}
          height={34}
        />
      </div>

      <button className={styles.catchPhraseButton}>
        Télécharger l&apos;application
      </button>
    </div>
  );
};
