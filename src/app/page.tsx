"use client";

import React from "react";
import Lenis from "lenis";
import IntroAnimation from "./Components/transitions/IntroAnimation";
import WhiteNavbar from "./Components/layout/WhiteNavbar";
import PresentationParagraph from "./Components/animations/PresentationParagraph";

import {
  useInView,
  motion,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

import SectionTwo from "./Components/ui/SectionTwo";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isExiting, setIsExiting] = React.useState(false);
  const [navBarColor, setNavBarColor] = React.useState("text-[#202020]");

  const opacity = useMotionValue(1);

  const mainRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const projectsectionRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });

  const opacityTransform = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  React.useEffect(() => {
    if (!isLoading) {
      const unsubscribeOpacityChange = opacityTransform.on(
        "change",
        (latestOpacity) => {
          opacity.set(latestOpacity);
        }
      );

      return () => unsubscribeOpacityChange();
    }
  }, [isLoading, opacityTransform]);

  React.useEffect(() => {
    // Run this line to avoid window not defined from the server
    if (typeof window !== "undefined") {
      const lenis = new Lenis();

      // Start Lenis animation
      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    }
  }, []);

  React.useEffect(() => {
    const unsubscribeScrollProg = scrollYProgress.on("change", (progress) => {
      console.log(progress);
      if (progress > 0.44) {
        // Adjust the threshold as needed
        setNavBarColor("text-[#DFD9D9]"); // Black when past threshold
      } else {
        setNavBarColor("text-[#202020]"); // White otherwise
      }
    });

    return () => unsubscribeScrollProg();
  }, [scrollYProgress]);

  return (
    <>
      {isLoading ? (
        <IntroAnimation isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <main className="">
          <div>
            <motion.main
              key="main-content"
              ref={containerRef}
              className={`h-[200vh] py-2 relative`}
            >
              <WhiteNavbar navBarColor={navBarColor} />
              <motion.div
                style={{ opacity }}
                ref={mainRef}
                className={`sticky top-0 justify-center w-full flex flex-col flex-grow`}
              >
                <section className="h-screen w-full flex flex-col px-4">
                  <PresentationParagraph />
                </section>
              </motion.div>
              <section
                ref={projectsectionRef}
                className="relative w-full bg-[#161616] px-32 pt-20 pb-32"
              >
                <SectionTwo />
              </section>
              <section className="py-20 h-screen">
                <p>hello!</p>
              </section>
            </motion.main>
          </div>
        </main>
      )}
      <div className="noise-bg"></div>
    </>
  );
}

//backup

// <div>
//   <motion.div
//     animate={{ backgroundColor: isProjectSectionInView ? "#161616" : "#E1DFDF" }}
//     transition={{ duration: 0.5, ease: "easeIn" }}
//     className={` min-h-screen flex flex-col py-2 hello pb-64`}
//   >
//     <WhiteNavbar navBarColor={navBarColor} />
//     <main
//       ref={mainRef}
//       className={` justify-center w-full flex flex-col flex-grow `}
//     >
//       <section className="min-h-screen w-full flex flex-col px-4 pb-60 pt-60">
//         <PresentationParagraph />
//       </section>
//       <motion.section
//         animate={{ backgroundColor: isProjectSectionInView ? "#161616" : "#E1DFDF" }}
//         transition={{ duration: 0.5, ease: "easeIn" }}
//         ref={projectsectionRef}
//       >
//         <HorizontalScroll
//           isExiting={isExiting}
//           setIsExiting={setIsExiting}
//         />
//       </motion.section>
//     </main>
//   </motion.div>
// </div>
