/* eslint-disable @typescript-eslint/no-unused-vars */
import OverviewFlow from "@/components/skillsTree/OverviewFlow";
import React, { useCallback } from "react";

export const Skills = () => {

  return (
    <section id="skills" className="static">
      <div className="border border-blue-600 w-[98%] h-[89vh]">
        <OverviewFlow />
      </div>
    </section>
  );
};
