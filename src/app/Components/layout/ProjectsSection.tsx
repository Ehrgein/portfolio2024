import React from "react";
import ProjectsLayout from "./ProjectsLayout";

function ProjectsSection({
  projectSectionRef,
}: {
  projectSectionRef?: React.RefObject<HTMLDivElement>;
}) {
  const [isExiting, setIsExiting] = React.useState(false);

  return (
    <>
      <section
        className="w-full bg-[#161616] pt-20
      desktop:px-44 xl:px-26 lg:px-28 md:px-20 mobilemd:px-4 
      md:pt-12 lg:pb-32 md:pb-20"
      >
        <div ref={projectSectionRef}>
          <div className="">
            <ProjectsLayout isExiting={isExiting} setIsExiting={setIsExiting} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
