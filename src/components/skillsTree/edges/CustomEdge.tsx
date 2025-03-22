import React from "react";
import { getBezierPath, Position } from "@xyflow/react";

interface CustomEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition: Position;
  targetPosition: Position;
  arrowHeadType: string;
  markerEndId: string;
}

const CustomEdge: React.FC<CustomEdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });



  return (
    <path
      style={{
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        stroke: "url(#gradient)",
      }}
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
    />
  );
};

export default CustomEdge;