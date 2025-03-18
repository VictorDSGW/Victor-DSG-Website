"use client"
import React, { memo } from "react";
import SkillAvatar from "@/components/skillsTree/SkillAvatar";
import Handles from "@/components/skillsTree/handles/Handles";

const SkillNode = ({ data }) => {
  return (
    <div className="flex justify-center items-center z-50">
      <SkillAvatar
        id={data.id}
        icon={data.icon}
        name={data.name}
        card={data.card}
      />

      <Handles />
    </div>
  );
};

export default memo(SkillNode);
