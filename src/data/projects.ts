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
  {
    id: 'cdp-platform',
    title: 'Metadata-Driven CDP',
    description: 'Production-grade Customer Data Platform processing 10M+ daily events using a metadata-driven Spark architecture.',
    tags: ['Python', 'PySpark', 'Airflow', 'MongoDB', 'GCP'],
    slug: 'cdp-platform',
  },
  {
    id: 'journey-engine',
    title: 'Real-Time Journey Engine',
    description: 'Production-grade journey orchestration engine processing 100K+ daily events with <80ms p99 latency using PyFlink and Kafka.',
    tags: ['Python', 'PyFlink', 'Kafka', 'Redis', 'MongoDB'],
    slug: 'journey-engine',
  },
  {
    id: 'kafka-auto-healing',
    title: 'Kafka Auto-Healing Consumer',
    description: 'Production-grade Kafka consumer framework with auto-healing and schema evolution processing 10M+ daily events.',
    tags: ['Python', 'Kafka', 'Avro', 'Schema Registry', 'GCP'],
    slug: 'kafka-auto-healing',
  },
];
