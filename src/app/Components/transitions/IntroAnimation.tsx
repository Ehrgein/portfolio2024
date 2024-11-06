import React from "react";
import { motion, useAnimate } from "framer-motion";
import { transform } from "next/dist/build/swc";

type loadingType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const transitionVariants = {
  initial: { y: "100%" },
  fill: { y: "0%", transition: { duration: 1, ease: [0.32, 0, 0.2, 1] } },
};

const IntroAnimation = ({ isLoading, setIsLoading }: loadingType) => {
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [scope, animate] = useAnimate();

  const exitParagraphAnim = async () => {
    await animate(
      ".load-para",
      {
        y: "-100%",
        opacity: 0,
      },
      { duration: 0.8, delay: 0.6, ease: [0.32, 0, 0.2, 1] }
    );
  };

  const startAnimation = async () => {
    await animate(
      ".loading-bar",
      {
        width: "100%",
      },
      {
        duration: 2,
        ease: [0.32, 0, 0.2, 1],
        onComplete: () => exitParagraphAnim(),
      }
    );

    await animate(
      ".loading-bar",
      {
        x: "100%",
      },
      {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
        onComplete: () => enterHomePagePanel(),
      }
    );
  };

  const finishtransitionforreal = async () => {
    await animate(
      ".transition-panel",
      {
        y: "0%",
      },
      {
        duration: 4,
      }
    );
  };

  const enterHomePagePanel = async () => {
    setIsTransitioning(true);
  };

  React.useEffect(() => {
    startAnimation();
  }, [animate]);

  return (
    <div
      ref={scope}
      className="bg-[#161616] flex flex-col items-center justify-center w-screen h-screen"
    >
      <div className={` flex flex-col max-w-96 w-full gap-1`}>
        <div className="overflow-hidden flex flex-col gap-[2px]">
          <div className="overflow-hidden">
            <p
              className="text-[#DCD8C0] tracking-[0.15em] text-base w-fit uppercase load-para
        "
            >
              Loading
            </p>
          </div>
          <div className="loading-bar w-[0%] h-3 bg-[#E1DFDF] max-w-[488px]" />
        </div>
      </div>
      {isTransitioning && (
        <motion.div
          initial="initial"
          animate="fill"
          variants={transitionVariants}
          onAnimationComplete={() => setIsLoading(!isLoading)}
          className="transition-panel fixed w-full h-screen bottom-0 left-0  bg-[#E1DFDF]"
        ></motion.div>
      )}
    </div>
  );
};

export default IntroAnimation;
