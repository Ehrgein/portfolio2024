import React from "react";
import WhiteNavbar from "../Components/layout/WhiteNavbar";
import IntroSection from "../Components/layout/IntroSection";
import ProjectsSection from "../Components/layout/ProjectsSection";
import AboutSection from "../Components/layout/AboutSection";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] leading-[0.8] mt-10">Sticky Footer</h1>
      <p>©copyright</p>
    </div>
  );
};

function HomePageContent() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const projectSectionRef = React.useRef<HTMLDivElement>(null);
  const aboutSectionRef = React.useRef<HTMLDivElement>(null);

  const navBarColor = useMotionValue("#202020");

  const { scrollYProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["start start", "start end"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.4], [1, 0]);

  // const isMobile = window.innerWidth < 768; // Example, adjust as needed or use a library like react-responsive

  return (
    <>
      {/* mobile */}
      <div className="md:hidden block">
        <main className="mb-[-100svh] overflow-x-clip">
          <div>
            <WhiteNavbar
              scrollYProgress={scrollYProgress}
              navBarColor={navBarColor}
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
            navBarColor={navBarColor}
            scrollYProgress={scrollYProgress}
          />
          {/*  main used to have a h-[200vh] h-[200vh] and a z-1 */}
          <motion.main className={`py-2 relative  z-[99999]`}>
            <IntroSection opacity={opacity} />
            <AboutSection aboutSectionRef={aboutSectionRef} />
            <ProjectsSection projectSectionRef={projectSectionRef} />
          </motion.main>
          <div
            className="relative h-[800px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
              <div className="h-[800px] sticky top-[calc(100vh-800px)]">
                <div>
                  <Nav />
                </div>
                <Section2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageContent;
