'use client';

import { useEffect, useState } from 'react';
import styles from './styles/page.module.scss';
import { Menu } from './components/Menu';
import { Hero } from './components/Hero';
import { Feature } from './components/Feature';
import { CommunityFeature } from './components/CommunityFeature';
import { CatchPhrase } from './components/CatchPhrase';
import { Footer } from './components/Footer';

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
      <header className={`${styles.homeHeader} ${scrolling ? styles.homeHeaderScrolled : ''}`}>
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
}

export default Home;