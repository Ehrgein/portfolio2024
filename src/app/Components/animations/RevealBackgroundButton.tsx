import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

type RevealBackgroundTypes = {
  children: React.ReactNode;
  handleSetIsExiting: () => void;
};

function RevealBackgroundButton({
  children,
  handleSetIsExiting,

  ...delegated
}: RevealBackgroundTypes) {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({
      y: "-100%",
      transition: { ease: "easeInOut", duration: 0.5 },
    });
  };

  const handleMouseLeave = () => {
    controls
      .start({
        y: "-200%",
        transition: { ease: "easeInOut", duration: 0.5 },
      })
      .then(() => {
        // Reset the animation back to its initial state after the animation ends
        controls.set({
          y: "0%",
        });
      });
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ color: "#D1CEC6" }}
      whileHover={{ color: "#161616" }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-center relative 
      box-shadow rounded-full bg-[#161616] z-0 cursor-pointer
      px-8
      mobilemd:px-7 mobilemd:py-3
      mobilesm:px-5 mobilesm:py-2"
      {...delegated}
      style={{ overflow: "hidden" }}
    >
      {/* Button Content */}
      <motion.span
        onClick={handleSetIsExiting}
        className="relative z-10 
        
       desktop:text-base xl:text-base lg:text-base md:text-sm mobilemd:text-sm mobilesm:text-[.7rem]"
        style={{ color: "inherit" }}
      >
        {children}
      </motion.span>
      {/* Sliding Background */}
      <motion.div
        animate={controls}
        initial={{ y: "100%" }}
        className="w-[150%] h-[100%] px-8 py-2 bg-[#DFD9D9] absolute rounded-full top-[100%] z-0"
      ></motion.div>
    </motion.div>
  );
}

export default RevealBackgroundButton;
