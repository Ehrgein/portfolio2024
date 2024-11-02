import React from "react";
import { motion, useAnimation } from "framer-motion";

type loadingType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const barVariants = {
  initial: {
    width: "0%",
  },
  fill: {
    width: "100%",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  slideOut: {
    x: "100%",
    transition: { duration: 0.8, delay: 0.6 },
  },
};

const transitionVariants = {
  initial: { y: "100%" },
  fill: { y: "0%" },
};

const IntroAnimation = ({ isLoading, setIsLoading }: loadingType) => {
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const barControls = useAnimation();
  const paragraphControls = useAnimation();

  const handleEndTransition = () => {
    barControls.start("slideOut").then(() => {
      setIsTransitioning(true);
    });

    paragraphControls.start({
      y: "100%",
      opacity: 0,
      transition: { duration: 0.8, delay: 0.6 },
    });
  };

  React.useEffect(() => {
    barControls.set("initial");
    barControls.start("fill");
  }, [barControls]);

  return (
    <div className="bg-[#121212] flex flex-col items-center justify-center w-screen h-screen">
      <div className={` flex flex-col max-w-96 w-full gap-1`}>
        <div className="overflow-hidden flex flex-col gap-[2px]">
          <motion.div className="overflow-hidden">
            <motion.p
              animate={paragraphControls}
              className="text-[#DCD8C0] tracking-[0.15em] text-base w-fit uppercase
        "
            >
              Loading
            </motion.p>
          </motion.div>
          <motion.div
            className="w-[0%] h-3 bg-[#E1DFDF] max-w-[488px]"
            initial="initial"
            animate={barControls}
            variants={barVariants}
            onAnimationComplete={() => handleEndTransition()}
          />
        </div>
      </div>
      {isTransitioning && (
        <motion.div
          initial="initial"
          animate="fill"
          variants={transitionVariants}
          transition={{ duration: 1, ease: [0.32, 0, 0.2, 1] }}
          className="fixed bottom-0 left-0 w-full h-screen bg-[#E1DFDF]"
          onAnimationComplete={() => setIsLoading(!isLoading)}
        ></motion.div>
      )}
    </div>
  );
};

export default IntroAnimation;
