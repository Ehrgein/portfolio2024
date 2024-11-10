"use client";

import React from "react";
import Lenis from "lenis";
import IntroAnimation from "./Components/transitions/IntroAnimation";
import WhiteNavbar from "./Components/layout/WhiteNavbar";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

import SectionTwo from "./Components/layout/SectionTwo";
import SectionOne from "./Components/layout/SectionOne";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  // const [isExiting, setIsExiting] = React.useState(false);

  const opacity = useMotionValue(1);
  const navBarColor = useMotionValue("#202020");

  // const mainRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const projectSectionRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacityTransform = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  React.useEffect(() => {
    if (!isLoading) {
      const unsubscribeOpacityChange = opacityTransform.on(
        "change",
        (latestOpacity) => {
          console.log(scrollYProgress);
          opacity.set(latestOpacity);
        }
      );

      return () => unsubscribeOpacityChange();
    }
  }, [isLoading, opacityTransform]);

  React.useEffect(() => {
    // Not rendering on the server
    if (typeof window !== "undefined") {
      const lenis = new Lenis();

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <IntroAnimation isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <>
          <div className="hidden md:block">
            <div>
              <motion.main
                key="main-content"
                ref={containerRef}
                className={`h-[200vh] py-2 relative`}
              >
                <WhiteNavbar
                  isLoading={isLoading}
                  scrollYProgress={scrollYProgress}
                  navBarColor={navBarColor}
                />
                {/* <motion.div
                  style={{ opacity }}
                  //   ref={mainRef}
                  className={`sticky top-0 justify-center w-full flex flex-col flex-grow`}
                >
                  <section className="h-screen w-full flex flex-col px-4">
                    <PresentationParagraph />
                  </section>
                </motion.div> */}
                <SectionOne opacity={opacity} />
                <SectionTwo projectSectionRef={projectSectionRef} />
                <section className="py-20 h-screen">
                  <p>hello!</p>
                </section>
              </motion.main>
            </div>
          </div>
          <div className="noise-bg"></div>
          {/* mobile layout */}
          <div className="md:hidden">
            <main className="mb-[-100svh] overflow-x-clip">
              <div>
                <motion.main
                  key="main-content"
                  ref={containerRef}
                  className={`h-[200vh] py-2 relative`}
                >
                  <WhiteNavbar
                    isLoading={isLoading}
                    scrollYProgress={scrollYProgress}
                    navBarColor={navBarColor}
                  />
                  <SectionOne opacity={opacity} />
                  <SectionTwo projectSectionRef={projectSectionRef} />
                  <section className="py-20 h-screen">
                    <p>hello!</p>
                  </section>
                </motion.main>
              </div>
            </main>
          </div>
        </>
      )}
    </>
  );
}

//backup

{
  /* <motion.div
                  style={{ opacity }}
                  // ref={mainRef}
                  className={`sticky top-0 justify-center w-full flex flex-col flex-grow`}
                >
                  <section className="h-screen w-full flex flex-col px-4">
                    <PresentationParagraph />
                  </section>
                </motion.div> */
}

// old section one code

// mobile
{
  /* <motion.div
                    style={{ opacity }}
                    // ref={mainRef}
                    className={`sticky top-0 h-[100svh] items-end justify-center w-full flex flex-col flex-grow`}
                  >
                    <section className="w-full flex flex-col px-4">
                      <PresentationParagraph />
                    </section>
                  </motion.div> */
}
