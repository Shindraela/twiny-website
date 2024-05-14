import styles from './styles/page.module.scss';
import { Menu } from './components/Menu';
import { Hero } from './components/Hero';
import { Feature } from './components/Feature';
import { CommunityFeature } from './components/CommunityFeature';
import { CatchPhrase } from './components/CatchPhrase';

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <header className={styles.homeHeader}>
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
    </main>
  );
}
