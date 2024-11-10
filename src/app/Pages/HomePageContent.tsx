import React from "react";
import WhiteNavbar from "../Components/layout/WhiteNavbar";
import IntroSection from "../Components/layout/IntroSection";
import ProjectsSection from "../Components/layout/ProjectsSection";
import AboutSection from "../Components/layout/AboutSection";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

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
      <div className="hidden md:block">
        <div>
          <WhiteNavbar
            navBarColor={navBarColor}
            scrollYProgress={scrollYProgress}
          />
          <motion.main className={`h-[200vh] py-2 relative`}>
            <IntroSection opacity={opacity} />
            <AboutSection aboutSectionRef={aboutSectionRef} />
            <ProjectsSection projectSectionRef={projectSectionRef} />
            <section className="py-20 h-screen">
              <p>hello!</p>
            </section>
          </motion.main>
        </div>
      </div>
    </>
  );
}

export default HomePageContent;
