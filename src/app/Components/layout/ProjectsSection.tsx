import React from "react";
import ProjectsLayout from "./ProjectsLayout";

function ProjectsSection({
  projectSectionRef,
}: {
  projectSectionRef: React.RefObject<HTMLDivElement>;
}) {
  const [isExiting, setIsExiting] = React.useState(false);

  return (
    <>
      <section
        ref={projectSectionRef}
        className="relative  w-full bg-[#161616] px-32 pt-20 pb-32"
      >
        <div>
          <div className="">
            <ProjectsLayout isExiting={isExiting} setIsExiting={setIsExiting} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
