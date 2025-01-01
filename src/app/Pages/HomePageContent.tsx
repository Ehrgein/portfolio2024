"use client";
import React from "react";
import WhiteNavbar from "../Components/layout/WhiteNavbar";
import IntroSection from "../Components/layout/IntroSection";
import ProjectsSection from "../Components/layout/ProjectsSection";
import AboutSection from "../Components/layout/AboutSection";
import { motion, useScroll, useTransform } from "framer-motion";
import NewFooter from "../Components/layout/NewFooter";

function HomePageContent() {
  const projectSectionRef = React.useRef<HTMLDivElement>(null);
  const aboutSectionRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress: aboutScrollOpacity } = useScroll({
    target: aboutSectionRef,
    offset: ["start start", "start end"],
  });

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["-12% 0%", "end start"],
  });

  const opacity = useTransform(aboutScrollOpacity, [1, 0.4], [1, 0]);

  return (
    <>
      <div className="block relative z-1 bg-[#EDE9DE]">
        <div>
          <WhiteNavbar aboutScrollProgress={aboutScrollProgress} />
          {/*  main used to have a h-[200vh] h-[200vh] and a z-[99999] */}
          <motion.main className="relative z-[100000]">
            <IntroSection opacity={opacity} />
            <AboutSection aboutSectionRef={aboutSectionRef} />
            <div ref={projectSectionRef}>
              <ProjectsSection />
            </div>
          </motion.main>
          <NewFooter />
        </div>
      </div>
    </>
  );
}

export default HomePageContent;
