import React from "react";
import ProjectsLayout from "./ProjectsLayout";
import { useMotionValueEvent, useScroll } from "framer-motion";

function ProjectsSection({
  projectSectionRef,
}: {
  projectSectionRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section
      ref={projectSectionRef}
      className="relative w-full bg-[#161616] px-32 pt-20 pb-32"
    >
      <div>
        <div className="">
          <ProjectsLayout />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
