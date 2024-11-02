import React from "react";
import { motion, useAnimation } from "framer-motion";

type loadingType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const IntroAnimation = ({ isLoading, setIsLoading }: loadingType) => {
  // Control for the bottom bar's linear progress
  const barControls = useAnimation();

  const paragraphControls = useAnimation();

  const hideControls = useAnimation();

  React.useEffect(() => {
    barControls.start({
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  }, [barControls, hideControls]);

  const handleEndTransition = () => {
    barControls.start({
      x: "100%",
      transition: { duration: 0.8, delay: 0.6 },
    });

    paragraphControls.start({
      y: "100%",
      opacity: 0,
      transition: { duration: 0.8, delay: 0.6 },
    });

    {
      /*     setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2500); */
    }
  };

  const TransitionTopage = () => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    });
  };

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
            animate={barControls}
            onAnimationComplete={() => handleEndTransition()}
          />
        </div>
      </div>
      <motion.div
        initial={{
          y: "100%",
        }}
        animate={{
          y: "0%",
        }}
        transition={{ duration: 1, ease: [0.32, 0, 0.2, 1], delay: 2.9 }}
        className="fixed bottom-0 left-0 w-full h-screen bg-[#E1DFDF]"
        onAnimationComplete={() => setIsLoading(!isLoading)}
      ></motion.div>
    </div>
  );
};

export default IntroAnimation;
