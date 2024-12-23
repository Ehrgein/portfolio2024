"use client";
import React from "react";
import WhiteNavbar from "../Components/layout/WhiteNavbar";
import IntroSection from "../Components/layout/IntroSection";
import ProjectsSection from "../Components/layout/ProjectsSection";
import AboutSection from "../Components/layout/AboutSection";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

import NewFooter from "../Components/layout/NewFooter";
import { footer } from "framer-motion/client";

function HomePageContent() {
  const projectSectionRef = React.useRef<HTMLDivElement>(null);
  const aboutSectionRef = React.useRef<HTMLDivElement>(null);
  const navBarColor = useMotionValue("#202020"); // Default color
  const footerRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState<number>(0);

  const { scrollYProgress: aboutScrollOpacity } = useScroll({
    target: aboutSectionRef,
    offset: ["start start", "start end"],
  });

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["-12% 0%", "end start"],
  });

  const isFooterInView = useInView(footerRef, { amount: 0.9 });

  const opacity = useTransform(aboutScrollOpacity, [1, 0.4], [1, 0]);

  React.useEffect(() => {
    console.log(isFooterInView, "hi!");
  }, [isFooterInView]);

  return (
    <>
      {/* mobile */}
      {/*desktop */}
      <div className="block relative z-1">
        {/* <div> */}
        {/* <div className="fixed left-[10%] text-4xl top-[10%]">ALEXIS</div> */}
        {/* <div className="border-2 border-[#222222] opacity-90 rounded-full h-20 w-20 p-8 fixed top-6 right-14"></div> */}
        {/* </div> */}
        <div>
          <WhiteNavbar
            isFooterInView={isFooterInView}
            navBarColor={navBarColor}
            progress={progress}
            setProgress={setProgress}
            aboutScrollProgress={aboutScrollProgress}
          />
          {/*  main used to have a h-[200vh] h-[200vh] and a z-[99999] */}
          <motion.main className=" relative z-50">
            <IntroSection opacity={opacity} />
            <AboutSection aboutSectionRef={aboutSectionRef} />
            <div ref={projectSectionRef}>
              <ProjectsSection />
            </div>
          </motion.main>
          {/* <Footer /> */}

          <NewFooter footerRef={footerRef} />
        </div>
      </div>
    </>
  );
}

export default HomePageContent;
