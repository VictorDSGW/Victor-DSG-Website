import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';

import {
  nodes as initialNodes,
  edges as initialEdges,
} from '@/data/SkillsTree/initial-elements';
import ButtonEdge from '@/components/skillsTree/edges/ButtonEdge';
import SkillNode from "@/components/skillsTree/nodes/SkillNode";
 
const nodeTypes = {
  avatar: SkillNode,
};
 
const edgeTypes = {
  button: ButtonEdge,
};
 
const nodeClassName = (node) => node.type;
 
const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );
 
  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        style={{ backgroundColor: "#F7F9FB" }}
        elementsSelectable={false}
        nodesDraggable={false}
        edgesReconnectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        panOnDrag={false}
      >
        {/* <MiniMap zoomable pannable nodeClassName={nodeClassName} />
        <Controls /> */}
      <Background  /> 
      </ReactFlow>
    </ReactFlowProvider>
  );
};
 
export default OverviewFlow;