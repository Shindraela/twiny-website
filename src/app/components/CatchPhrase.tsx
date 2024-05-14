import React from 'react';
import styles from '../styles/catch.phrase.module.scss';

export const CatchPhrase = () => {
  return (
    <div className={styles.catchPhrase}>
      <h2 className={styles.catchPhraseTitle}>
        Enfin une appli qui fait matcher les âmes sœurs de l&apos;amitié ! 🌟🤝
      </h2>

      <button className={styles.catchPhraseButton}>
        Télécharger l&apos;application
      </button>
    </div>
  );
};
