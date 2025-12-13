import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './ProjectLayout.module.css';

interface ProjectLayoutProps {
  title: string;
  tags: string[];
  children: ReactNode;
}

export default function ProjectLayout({
  title,
  tags,
  children,
}: ProjectLayoutProps): ReactNode {
  return (
    <article className={styles.projectArticle}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className={styles.content}>{children}</div>

      <footer className={styles.footer}>
        <Link to="/projects" className={styles.backLink}>
          ← Back to Projects
        </Link>
      </footer>
    </article>
  );
}
