"use client"
import React from "react";
import OverviewFlow from "@/components/skillsTree/OverviewFlow";
// import useMobileView from "@/components/mobile/useMobileView";

export const Skills = () => {
  // const isMobile = useMobileView();

  return (
    <section id="skills" className="static overflow-hidden pt-20 min-h-[900px] lg:min-h-screen lg:h-screen">
      <div className="border border-blue-600 w-[98%] h-[99%]"
      // style={ isMobile ? { transform: 'rotate(-90deg)' } : {}}
      >
        <OverviewFlow />
      </div>
    </section>
  );
};
