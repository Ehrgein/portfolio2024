import React from "react";
import ProjectsLayout from "./ProjectsLayout";

function ProjectsSection() {
  const [isExiting, setIsExiting] = React.useState(false);

  // removed the refs from this section, check if it doesn't work.

  return (
    <>
      <section
        className="w-full bg-[#161616] pt-20
      desktop:px-44 xl:px-26 lg:px-28 md:px-20
      md:pt-12 lg:pb-32 md:pb-20 mobilesm:pt-0 relative z-[9999]"
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
