import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

type RevealBackgroundTypes = {
  children: React.ReactNode;
  backgroundColor: string;
  handleSetIsExiting: () => void;
};

function RevealBackgroundButton({
  children,
  handleSetIsExiting,
  backgroundColor = "#DFD999",
  ...delegated
}: RevealBackgroundTypes) {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({
      y: "-100%",
      width: "100%",
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
      className="box-shadow rounded-full bg-[#161616] z-0 cursor-pointer relative flex items-center justify-center px-8 py-2"
      {...delegated}
      style={{ overflow: "hidden" }}
    >
      {/* Button Content */}
      <motion.span className="relative z-10 " style={{ color: "inherit" }}>
        {children}
      </motion.span>
      {/* Sliding Background */}
      <motion.div
        animate={controls}
        initial={{ y: "-15%" }}
        className="w-[150%] h-[100%] px-8 py-2 bg-[#DFD9D9] absolute rounded-full top-[100%] z-0"
      ></motion.div>
    </motion.div>
  );
}

export default RevealBackgroundButton;
