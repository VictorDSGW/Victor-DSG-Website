"use client"
import React from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from '@xyflow/react';
import useMobileView from "@/components/hooks/useMobileView";
import { useDelayedMobileRotation } from "@/components/hooks/useDelayedMobileRotation";
import '@xyflow/react/dist/style.css';
import {
  nodes as initialNodes,
  edges as initialEdges,
} from '@/data/SkillsTree/initial-elements';
import SkillNode from "@/components/skillsTree/nodes/SkillNode";
import ButtonEdge from '@/components/skillsTree/edges/ButtonEdge';
import AnnotationNode from "@/components/skillsTree/nodes/AnnotationNode";
 
const nodeTypes = {
  avatar: SkillNode,
  annotation: AnnotationNode
};
 
const edgeTypes = {
  button: ButtonEdge,
};
 
const nodeClassName = (node) => node.type;

const proOptions = { hideAttribution: true };
 
const OverviewFlow = () => {
  const isMobile = useMobileView();
  const shouldRotate = useDelayedMobileRotation(100);
  const customNodes = initialNodes(isMobile);
  const [nodes, setNodes, onNodesChange] = useNodesState(customNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
      <ReactFlowProvider>
        <div
          className={`transform transition-transform duration-500 w-full h-full ${
            shouldRotate ? "origin-center -rotate-90" : "rotate-0"
          }`}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
            proOptions={proOptions}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            elementsSelectable={false}
            nodesDraggable={false}
            edgesReconnectable={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            preventScrolling={false}
            panOnDrag={false}
            className={`transform transition-transform duration-100 ${
              shouldRotate ? "origin-bottom -rotate-90" : "rotate-0"
            }`}
            style={ isMobile ? {
              transform: 'translate(-430px, -250px)',
            } : {}}
          >
          </ReactFlow>
        </div>
      </ReactFlowProvider>
  );
};
 
export default OverviewFlow;