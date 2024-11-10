"use client";

import React from "react";
import Lenis from "lenis";
import IntroAnimation from "./Components/transitions/IntroAnimation";

import ProjectsSection from "./Components/layout/ProjectsSection";
import HomePageContent from "./Pages/HomePageContent";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

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
        <HomePageContent />
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
