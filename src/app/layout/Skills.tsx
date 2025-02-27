/* eslint-disable @typescript-eslint/no-unused-vars */
import OverviewFlow from "@/components/skillsTree/OverviewFlow";
import React, { useCallback } from "react";

export const Skills = () => {

  return (
    <section id="skills" className="static">
      <div className="border border-blue-600 bg-blue-700 w-11/12 h-screen absolute">
        <div className="border border-red-600 w-full h-full">
          <OverviewFlow />
        </div>
      </div>
    </section>
  );
};
