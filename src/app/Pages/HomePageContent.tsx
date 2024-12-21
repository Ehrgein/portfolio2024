import React from "react";
import WhiteNavbar from "../Components/layout/WhiteNavbar";
import IntroSection from "../Components/layout/IntroSection";
import ProjectsSection from "../Components/layout/ProjectsSection";
import AboutSection from "../Components/layout/AboutSection";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Socials from "../Components/ui/Socials";
import BackToTopReusable from "../Components/animations/BackToTopReusable";

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
          {/*  main used to have a h-[200vh] h-[200vh] and a z-[99999] */}
          <motion.main className={`relative`}>
            <IntroSection opacity={opacity} />
            <AboutSection aboutSectionRef={aboutSectionRef} />
            <ProjectsSection projectSectionRef={projectSectionRef} />
          </motion.main>
          <footer
            className="relative h-[500px]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <div className="relative h-[calc(100vh+500px)] -top-[100vh]">
              <div className="h-[500px] sticky flex flex-col  top-[calc(100vh-500px)]">
                <div className="pt-20 px-24 space-y-4">
                  <h3 className="text-[#161616] font-medium text-7xl ml-[-8px]">
                    Want to reach out?
                  </h3>
                  <p className="text-[#525151] text-xl py-3">
                    I’m always happy to talk. Feel free to reach out if you have
                    a project in mind, or simply want to say hi!
                  </p>
                </div>
                <div className="pt-10 flex px-24">
                  <div className="w-full relative flex items-end">
                    <p className="text-[#161616] text-[40px] border-b-[1px] border-[#323232]">
                      <a href="mailto:hello@alexisford.dev">
                        hello@alexisford.dev
                      </a>

                      {/* <span className="h-[1px] block bg-[#161616] my-2"></span> */}
                    </p>
                    <BackToTopReusable />
                  </div>
                </div>
                <Socials />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default HomePageContent;
