import React from "react";
import { Handle, Position } from "@xyflow/react";

interface CustomInputNodeProps {
  data: {
    label: string;

  };
  isConnectable: boolean;
  sourcePosition: Position;
}

export const CustomInputNode: React.FC<CustomInputNodeProps> = ({ data, isConnectable, sourcePosition }) => {
  return (
    <div>
      {data.label}
      <Handle
        type="source"
        position={sourcePosition!}
        isConnectable={isConnectable}
      />
    </div>
  );
}

CustomInputNode.displayName = "CustomInputNode";

export default CustomInputNode;
