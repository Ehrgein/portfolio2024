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
  inView,
} from "framer-motion";

import NewFooter from "../Components/layout/NewFooter";

function HomePageContent() {
  const containerRef = React.useRef<HTMLDivElement>(null);
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

  const isFooterInView = useInView(footerRef, { amount: 0.96 });

  const opacity = useTransform(aboutScrollOpacity, [1, 0.4], [1, 0]);

  return (
    <>
      {/* mobile */}
      <div className="md:hidden block">
        <main className="mb-[-100svh] overflow-x-clip">
          <div>
            <WhiteNavbar
              isFooterInView={isFooterInView}
              aboutScrollProgress={aboutScrollProgress}
              navBarColor={navBarColor}
              progress={progress}
              setProgress={setProgress}
            />
            <motion.main
              key="main-content"
              ref={containerRef}
              className={`h-[200vh] py-2 relative`}
            >
              <IntroSection opacity={opacity} />
              <AboutSection aboutSectionRef={aboutSectionRef} />
              <section className="py-20 h-screen">
                <p>hello!</p>
              </section>
            </motion.main>
          </div>
        </main>
      </div>
      {/*desktop */}
      <div className="hidden md:block relative z-1">
        <div>
          <WhiteNavbar
            isFooterInView={isFooterInView}
            navBarColor={navBarColor}
            progress={progress}
            setProgress={setProgress}
            aboutScrollProgress={aboutScrollProgress}
          />
          {/*  main used to have a h-[200vh] h-[200vh] and a z-[99999] */}
          <motion.main>
            <IntroSection opacity={opacity} />
            <AboutSection aboutSectionRef={aboutSectionRef} />
            <div ref={projectSectionRef}>
              <ProjectsSection />
            </div>
          </motion.main>
          {/* <Footer /> */}
          <motion.div id="footerRef">
            <NewFooter footerRef={footerRef} />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default HomePageContent;
