import {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {projects} from '@site/src/data/projects';
import styles from './styles.module.css';

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))];
  const filteredProjects =
    selectedTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <Layout
      title="Projects"
      description="Portfolio of projects spanning distributed systems, platform engineering, and backend development">
      <main className={styles.projectsPage}>
        <div className={styles.header}>
          <h1>Projects</h1>
          <p>
            A collection of work across distributed systems, platform
            engineering, and scalable architectures
          </p>
        </div>

        <div className={styles.tagFilter}>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.tag} ${selectedTag === tag ? styles.tagActive : ''}`}
              onClick={() => setSelectedTag(tag)}>
              {tag}
            </button>
          ))}
        </div>

        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className={styles.projectCard}>
              <article>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.readMore}>Read more →</div>
              </article>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.empty}>
            No projects found with the selected tag.
          </div>
        )}
      </main>
    </Layout>
  );
}
