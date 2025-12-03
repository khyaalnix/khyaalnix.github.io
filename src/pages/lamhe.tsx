import React, { useCallback, useRef } from 'react';
import Layout from '@theme/Layout';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  NodeDragHandler,
} from 'reactflow';
import 'reactflow/dist/style.css';
import styles from './lamhe.module.css';
import { MomentNodeData } from '../utils/lamhe/lamhe.types';
import { parseConfig, validateMomentConfig } from '../utils/lamhe/lamhe.utils';
import momentsConfig from '../data/moments.json';

// Custom node component with image
function ImageNode({ data }: { data: MomentNodeData }) {
  return (
    <div className={styles.imageNode}>
      {data.image && (
        <div className={styles.nodeImage}>
          <img src={data.image} alt={data.label} />
        </div>
      )}
      <div className={styles.nodeLabel}>{data.label}</div>
      {data.description && (
        <div className={styles.nodeDescription}>{data.description}</div>
      )}
    </div>
  );
}

const nodeTypes = {
  imageNode: ImageNode,
};

// Generate nodes and edges from configuration
const { nodes: generatedNodes, edges: generatedEdges } = (() => {
  // Validate configuration
  const validation = validateMomentConfig(momentsConfig);
  if (!validation.valid) {
    console.error('Invalid moments configuration:', validation.errors);
    return { nodes: [], edges: [] };
  }

  // Parse and generate nodes and edges
  return parseConfig(momentsConfig);
})();

const initialNodes = generatedNodes;
const initialEdges = generatedEdges;

export default function Lamhe() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);
  const resetTimeoutRef = useRef<NodeJS.Timeout>();

  // Store original positions
  const originalPositionsRef = useRef(
    initialNodes.reduce((acc, node) => {
      acc[node.id] = node.position;
      return acc;
    }, {} as Record<string, { x: number; y: number }>)
  );

  // Handle node drag stop - reset to original position after delay
  const onNodeDragStop: NodeDragHandler = useCallback(() => {
    // Clear any existing timeout
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    // Set a new timeout to reset positions after 2 seconds
    resetTimeoutRef.current = setTimeout(() => {
      setNodes((nds) =>
        nds.map((node) => ({
          ...node,
          position: originalPositionsRef.current[node.id] || node.position,
        }))
      );
    }, 2000);
  }, [setNodes]);

  return (
    <Layout
      title="Lamhe"
      description="Moments of my life connected through time">
      <div className={styles.lamheContainer}>
        <div className={styles.header}>
          <h1>Lamhe</h1>
          <p>Moments of my life, connected through time.</p>
        </div>
        <div className={styles.flowContainer}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onNodeDragStop={onNodeDragStop}
            nodeTypes={nodeTypes}
            nodesDraggable={true}
            nodesConnectable={false}
            elementsSelectable={true}
            fitView
            attributionPosition="bottom-left"
          >
            <Controls />
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
    </Layout>
  );
}
