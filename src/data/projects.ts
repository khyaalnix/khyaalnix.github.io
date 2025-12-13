export interface ProjectMetadata {
  id: string;
  title: string;
  description: string;
  tags: string[];
  slug: string;
}

export const projects: ProjectMetadata[] = [
  {
    id: 'distributed-cache',
    title: 'Distributed Cache System',
    description: 'High-performance distributed caching layer with Redis integration for low-latency data access across multiple nodes.',
    tags: ['Go', 'Redis', 'Distributed Systems'],
    slug: 'distributed-cache',
  },
  {
    id: 'microservices-platform',
    title: 'Microservices Platform',
    description: 'Scalable microservices architecture with service mesh, API gateway, and event-driven communication patterns.',
    tags: ['Kubernetes', 'Docker', 'gRPC'],
    slug: 'microservices-platform',
  },
  {
    id: 'data-pipeline',
    title: 'Data Pipeline Framework',
    description: 'Real-time data processing pipeline with stream processing, ETL workflows, and automated data quality checks.',
    tags: ['Apache Kafka', 'Python', 'Spark'],
    slug: 'data-pipeline',
  },
];
