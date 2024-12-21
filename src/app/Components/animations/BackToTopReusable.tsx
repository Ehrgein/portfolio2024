import React from "react";
import { motion } from "framer-motion";

const scaleVariant = {
  enter: {
    scale: 0.92,
  },
  exit: {
    scale: 1,
  },
};

const arrowVariants = {
  enter: {
    y: "-100%",

    transition: { duration: 0.6, ease: [0.6, 0, 0, 1] },
  },
  leave: {
    y: "0%",
    transition: { duration: 0.4, ease: [0.75, 0, 0, 1] },
  },
};

const slidingArrowVariant = {
  enter: {
    y: "-100%",

    transition: { duration: 0.6, ease: [0.6, 0, 0, 1] },
  },
  leave: {
    y: "100%",
    transition: { duration: 0.4, ease: [0.75, 0, 0, 1] },
  },
};

function BackToTopReusable() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 1 }}
      variants={scaleVariant}
      animate={isHovered ? "enter" : "exit"}
      className="absolute overflow-hidden right-0 rounded-full w-20 h-20 bg-[#323232]"
    >
      <motion.aside
        variants={arrowVariants}
        animate={isHovered ? "enter" : "leave"}
        className="relative w-full h-full grid place-content-center"
      >
        <svg
          data-name="1-Arrow Up"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-10 pt-3"
        >
          <path
            d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.16V22h2V3.20l8.29 8.29z"
            fill="#FAFAFA"
          />
        </svg>
      </motion.aside>
      <motion.div
        variants={slidingArrowVariant}
        animate={isHovered ? "enter" : "leave"}
        className="relative grid place-content-center w-20 h-20 rounded-full"
      >
        <svg
          data-name="1-Arrow Up"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-10 pt-3"
        >
          <path
            d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.16V22h2V3.20l8.29 8.29z"
            fill="#FAFAFA"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default BackToTopReusable;
