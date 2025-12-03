import { Node, Edge } from 'reactflow';

/**
 * Configuration schema for a single moment
 */
export interface MomentConfig {
  time: {
    year: number;
    month: number;
  };
  image?: string;
  title: string;
  description?: string;
  weight?: number; // Edge weight (1-10), represents importance/connection strength
}

/**
 * Root configuration schema for all moments
 */
export interface MomentsConfig {
  moments: MomentConfig[];
}

/**
 * Extended node data with moment information
 */
export interface MomentNodeData {
  label: string;
  image?: string;
  description?: string;
  timestamp: number; // Unix timestamp for sorting
}

/**
 * Type for moment nodes
 */
export type MomentNode = Node<MomentNodeData>;

/**
 * Type for moment edges
 */
export type MomentEdge = Edge;
