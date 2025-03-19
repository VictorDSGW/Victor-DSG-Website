"use client"
import React from "react";
import OverviewFlow from "@/components/skillsTree/OverviewFlow";

export const Skills = () => {
  return (
    <section id="skills" className="static overflow-hidden pt-20 min-h-[900px] lg:min-h-screen lg:h-screen">
      <div className="border border-blue-600 w-[98%] h-[99%]"
      >
        <OverviewFlow />
      </div>
    </section>
  );
};
