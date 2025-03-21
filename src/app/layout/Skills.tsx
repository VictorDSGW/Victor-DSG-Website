"use client"
import React from "react";
import OverviewFlow from "@/components/skillsTree/OverviewFlow";

export const Skills = () => {
  return (
    <section id="skills" className="overflow-hidden min-h-[900px] lg:min-h-screen flex justify-center">
      <div className="border border-blue-600 w-[98%] h-[99%]"
      >
        <OverviewFlow />
      </div>
    </section>
  );
};
