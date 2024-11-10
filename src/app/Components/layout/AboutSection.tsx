import React from "react";
import AboutMe from "./AboutMe";

function AboutSection({
  aboutSectionRef,
}: {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section
      ref={aboutSectionRef}
      className="relative w-full bg-[#161616] px-32 pt-20 pb-32"
    >
      <div>
        <div className="pb-32">
          <AboutMe />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
