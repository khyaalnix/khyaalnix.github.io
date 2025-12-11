import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        <div className={styles.profileSection}>
          <div className={styles.profileImage}>
            <img src="img/profile.jpg" alt="Profile" />
          </div>
          <div className={styles.welcomeText}>
            Welcome to my anxious world.
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <div className={styles.content}>
      <h1 className={styles.name}>Nikhil Kumar</h1>

      <p className={styles.intro}>i am nikhil.</p>

      <p className={styles.paragraph}>
        i studied information science in undergrad, and learned systems engineering, distributed architecture,
        longside my work experience solely due to my interest in building things that scale and solve real problems.
      </p>

      <p className={styles.paragraph}>
        my aim is to build robust, scalable systems that people can rely on. personally, i would like to
        understand more about what's going under the hood of complex distributed systems responsible for
        deciding whether to scale up or down, how to handle failures gracefully, or what patterns to use
        when building microservices. in addition, my interest lies in generative intelligence and connecting it
        with physical intelligence so i try to keep myself up to date on these topics too.
      </p>

      <p className={styles.paragraph}>
        as of now, i've been working on building scalable backend systems, data platforms, and AI-powered
        tools. During this time:
      </p>

      <ul className={styles.list}>
        <li>
          worked on creating distributed systems that handle high throughput and low latency requirements
        </li>
        <li>
          published my thoughts on <Link to="/blog">system design patterns and architecture decisions</Link>
        </li>
        <li>
          currently working on building tools that make developers' lives easier, you can follow my work{' '}
          <Link to="https://github.com/khyaalnix">here</Link>
        </li>
      </ul>

      <p className={styles.paragraph}>
        i'm open to full-time/part-time/contract opportunities or collaborations around distributed systems,
        platform engineering, and backend development. you can reach out to me at{' '}
        <Link to="mailto:nikhil.kumar707128@gmail.com">nikhil.kumar707128@gmail.com</Link>
      </p>

      <p className={styles.paragraph}>
        when i'm not working i'm probably thinking about how i can improve my coding skills and build better
        systems. i occasionally pick up a book (mainly technical but won't shy away from a good sci-fi) too
        trying to learn more about system design, distributed computing but also enjoy reading about startups,
        product development, or some new tech that looks interesting to me.
      </p>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Systems builder. Platform tinkerer. Distributed architecture troublemaker.">
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageContent />
      </main>
    </Layout>
  );
}
