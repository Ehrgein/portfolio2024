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

    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2500);
  };

  console.log(isLoading);

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
            style={{
              width: "0%", // Start width at 0
              height: "12px",
              background: "#DCD8C0",
              maxWidth: "488px",
            }}
            animate={barControls}
            onAnimationComplete={() => handleEndTransition()}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
