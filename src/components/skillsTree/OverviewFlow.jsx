"use client"
import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  // MiniMap,
  // Controls,
  // Background,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from '@xyflow/react';
import useMobileView from "@/components/mobile/useMobileView";
import { useDelayedMobileRotation } from "@/components/mobile/useDelayedMobileRotation";
// import { useReactFlowSize } from "@/components/skillsTree/hooks/useReactFlowSize";
import '@xyflow/react/dist/style.css';

import {
  nodes as initialNodes,
  edges as initialEdges,
} from '@/data/SkillsTree/initial-elements';
import ButtonEdge from '@/components/skillsTree/edges/ButtonEdge';
import SkillNode from "@/components/skillsTree/nodes/SkillNode";
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
  // const [flowRef, { width, height }] = useReactFlowSize();
  const customNodes = initialNodes(isMobile);
  const [nodes, setNodes, onNodesChange] = useNodesState(customNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    // <div
    //   style={ isMobile ? { transform: 'rotate(-90deg)' } : {}}
    // >
      <ReactFlowProvider
        // style={{ height: '100%', width: '100%' }}
      >
        <div
          // ref={flowRef}
          // style={{ width: "100vw", height: "100vh" }}
          // className='transform transition-transform origin-center duration-500 rotate-0 to-rotate-[90] lg:rotate-0'
          className={`transform transition-transform duration-500 w-full h-full ${
            shouldRotate ? "origin-center -rotate-90" : "rotate-0"
          }`}
          // style={ isMobile ? {
          //   // className: "z-axis"
          // //   from transform: 'rotateZ(20deg)',
          // //   to transform: 'rotateZ(-20deg)',
          // //   // transform: 'rotateZ(-90deg)',
          // //   // transformOrigin: 'center center',
          // //   transformStyle: 'preserve-3d',
          // //   backfaceVisibility: 'hidden',
          // //   width: '100vh',
          // //   height: '100vw',
          // //   overflow: 'visible'
          // } : {}}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            proOptions={proOptions}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            // style={{ backgroundColor: "#F7F9FB" }}
            elementsSelectable={false}
            nodesDraggable={false}
            edgesReconnectable={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            preventScrolling={false}
            panOnDrag={false}
            // ref={flowRef}
            className={`transform transition-transform duration-100 ${
              shouldRotate ? "origin-bottom -rotate-90" : "rotate-0"
            }`}
            style={ isMobile ? {
              // transform: 'rotate(-90deg)'
              transform: 'translate(-430px, -250px)',
              // width,
              // height
            } : {
              // width, height
            }}
          >
          {/* <MiniMap zoomable pannable nodeClassName={nodeClassName} />
          <Controls /> */}
          {/* <Background  />  */}
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    // </div>
  );
};
 
export default OverviewFlow;