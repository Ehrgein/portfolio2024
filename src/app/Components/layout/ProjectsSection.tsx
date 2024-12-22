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
      <section className="relative w-full bg-[#161616] md:px-20 lg:px-28 xl:px-32 desktop:px-44 pt-20 pb-32">
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
