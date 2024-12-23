import React from "react";
import AboutMe from "./AboutMe";

function AboutSection({
  aboutSectionRef,
}: {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section className="w-full bg-[#161616] xl:px-32 lg:px-20 md:px-16 mobilemd:px-4 pt-20 pb-32">
      <div>
        <div ref={aboutSectionRef} className="pb-32 lg:pb-12 md:pb-6">
          <AboutMe />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
