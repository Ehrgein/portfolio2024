import React from "react";
import AboutMe from "./AboutMe";
import { useScroll, MotionValue } from "framer-motion";

function AboutSection({
  aboutSectionRef,
}: {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section className="w-full bg-[#161616] px-32 pt-20 pb-32">
      <div>
        <div ref={aboutSectionRef} className="pb-32">
          <AboutMe />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
