import { MomentConfig, MomentsConfig, MomentNode, MomentEdge } from './lamhe.types';
import { MarkerType } from 'reactflow';

/**
 * Converts moment config to Unix timestamp for sorting
 */
export function momentToTimestamp(moment: MomentConfig): number {
  return new Date(moment.time.year, moment.time.month - 1).getTime();
}

/**
 * Sorts moments chronologically (oldest to newest)
 */
export function sortMomentsByTime(moments: MomentConfig[]): MomentConfig[] {
  return [...moments].sort((a, b) => momentToTimestamp(a) - momentToTimestamp(b));
}

/**
 * Formats date for display
 */
export function formatMomentDate(moment: MomentConfig): string {
  const date = new Date(moment.time.year, moment.time.month - 1);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Calculates node positions using a flowing hierarchical layout
 * Creates a more organic, graph-like structure
 */
export function calculateNodePositions(moments: MomentConfig[]): { x: number; y: number }[] {
  const positions: { x: number; y: number }[] = [];
  const verticalSpacing = 250;
  const horizontalSpacing = 350;

  // Start position
  const startX = 500;
  const startY = 100;

  moments.forEach((_, index) => {
    let x: number;
    let y: number;

    if (index === 0) {
      // First node - centered at top
      x = startX;
      y = startY;
    } else {
      // Create a flowing pattern with more horizontal variation
      const row = Math.floor(index / 2);
      const col = index % 2;

      x = startX + (col === 0 ? -horizontalSpacing : horizontalSpacing);
      y = startY + (row + 1) * verticalSpacing;
    }

    positions.push({ x, y });
  });

  return positions;
}

/**
 * Generates React Flow nodes from moments configuration
 */
export function generateNodesFromConfig(config: MomentsConfig): MomentNode[] {
  const sortedMoments = sortMomentsByTime(config.moments);
  const positions = calculateNodePositions(sortedMoments);

  return sortedMoments.map((moment, index) => ({
    id: `moment-${index + 1}`,
    type: 'imageNode',
    position: positions[index],
    data: {
      label: moment.title,
      image: moment.image,
      description: moment.description || formatMomentDate(moment),
      timestamp: momentToTimestamp(moment),
    },
  }));
}

/**
 * Generates edges connecting moments chronologically with weighted thickness
 * Creates a directed graph showing life progression
 */
export function generateEdgesFromNodes(
  nodes: MomentNode[],
  moments: MomentConfig[]
): MomentEdge[] {
  const edges: MomentEdge[] = [];

  for (let i = 0; i < nodes.length - 1; i++) {
    const weight = moments[i + 1].weight || 5; // Default weight is 5
    const strokeWidth = Math.max(1, Math.min(10, weight)); // Clamp between 1 and 10

    edges.push({
      id: `e${i + 1}-${i + 2}`,
      source: nodes[i].id,
      target: nodes[i + 1].id,
      type: 'smoothstep', // Use smoothstep for better visibility
      animated: true,
      deletable: false,
      focusable: false,
      style: {
        strokeWidth,
        stroke: '#61afef', // Use theme primary color
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#61afef',
      },
    });
  }

  return edges;
}

/**
 * Main function to parse configuration and generate nodes and edges
 */
export function parseConfig(config: MomentsConfig): {
  nodes: MomentNode[];
  edges: MomentEdge[];
} {
  const sortedMoments = sortMomentsByTime(config.moments);
  const nodes = generateNodesFromConfig(config);
  const edges = generateEdgesFromNodes(nodes, sortedMoments);

  return { nodes, edges };
}

/**
 * Validates moment configuration
 */
export function validateMomentConfig(config: MomentsConfig): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!config.moments || !Array.isArray(config.moments)) {
    errors.push('Configuration must have a "moments" array');
    return { valid: false, errors };
  }

  if (config.moments.length === 0) {
    errors.push('Moments array cannot be empty');
    return { valid: false, errors };
  }

  config.moments.forEach((moment, index) => {
    if (!moment.time) {
      errors.push(`Moment at index ${index} is missing "time" field`);
    } else {
      if (typeof moment.time.year !== 'number') {
        errors.push(`Moment at index ${index} has invalid "year" (must be a number)`);
      }
      if (typeof moment.time.month !== 'number' || moment.time.month < 1 || moment.time.month > 12) {
        errors.push(`Moment at index ${index} has invalid "month" (must be 1-12)`);
      }
    }

    if (!moment.title || typeof moment.title !== 'string') {
      errors.push(`Moment at index ${index} is missing or has invalid "title" field`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}
