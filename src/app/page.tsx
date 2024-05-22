'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { Menu } from './components/menu/Menu';
import { Hero } from './components/hero/Hero';
import { Feature } from './components/feature/Feature';
import { CommunityFeature } from './components/communityFeature/CommunityFeature';
import { CatchPhrase } from './components/catchPhrase/CatchPhrase';
import { Footer } from './components/footer/Footer';

const Home = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.homeMain}>
      <header
        className={`${styles.homeHeader} ${
          scrolling ? styles.homeHeaderScrolled : ''
        }`}
      >
        <Menu />
      </header>
      <section className={styles.homeCenter}>
        <Hero />
      </section>
      <section className={styles.homeFeature}>
        <Feature />
      </section>
      <section className={styles.homeCommunityFeature}>
        <CommunityFeature />
      </section>
      <section className={styles.homeCatchPhrase}>
        <CatchPhrase />
      </section>
      <section className={styles.homeFooter}>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
