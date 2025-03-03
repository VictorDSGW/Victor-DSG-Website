// "use client"
import React, { memo } from "react";
import SkillAvatar from "@/components/skillsTree/SkillAvatar";
import { Handle, Position } from "@xyflow/react";
import { nodes } from "@/data/SkillsTree/initial-elements";

// interface SkillNodeProps {
//   data: {
//     skill: {
//       id: string;
//       position: { x: number; y: number };
//       icon: string;
//       name: string;
//       card: {
//         header: { title: string; description?: string };
//         content: { text: string };
//         footer: { progress?: number | null; link?: string };
//       };
//       lines: { from: string; to: string; styles: string };
//     };
//   };
// }

// const SkillNode: React.FC<SkillNodeProps> = ({ data }) => {
const SkillNode = ({ data }) => {
  return (
    <div className="flex justify-center items-center z-50">
      <SkillAvatar
        id={data.id}
        icon={data.icon}
        name={data.name}
        card={data.card}
      />

      <Handle
        id="N"
        type="source"
        position={Position.Top}
        style={{ background: "#555", width: 5, height: 5 }}
      />
      <Handle
        id="S"
        type="source"
        position={Position.Bottom}
        style={{ background: "#555", width: 5, height: 5 }}
      />
      <Handle
        id="W"
        type="source"
        position={Position.Left}
        style={{ background: "#555", width: 5, height: 5 }}
      />
      <Handle
        id="E"
        type="source"
        position={Position.Right}
        style={{ background: "#555", width: 5, height: 5 }}
      />

      <Handle
        id="N"
        type="target"
        position={Position.Top}
        style={{ background: "#000", width: 5, height: 5 }}
      />
      <Handle
        id="S"
        type="target"
        position={Position.Bottom}
        style={{ background: "#000", width: 5, height: 5 }}
      />
      <Handle
        id="W"
        type="target"
        position={Position.Left}
        style={{ background: "#000", width: 5, height: 5 }}
      />
      <Handle
        id="E"
        type="target"
        position={Position.Right}
        style={{ background: "#000", width: 5, height: 5 }}
      />
    </div>
  );
};

export default memo(SkillNode);
