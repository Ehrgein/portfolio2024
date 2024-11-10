import React from "react";
import ProjectListWithImages from "../ui/ProjectListWithImages";
import AboutMe from "./AboutMe";
import ProjectsLayout from "./ProjectsLayout";

function SectionTwo({
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
        <div className="pb-32">
          <AboutMe />
        </div>
        <div className="">
          <ProjectsLayout />
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
