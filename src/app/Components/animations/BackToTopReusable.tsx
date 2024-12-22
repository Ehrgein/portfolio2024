"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  scaleVariant,
  arrowVariants,
  slidingArrowVariant,
} from "@/app/helpers/variants";

function BackToTopReusable() {
  const [isHovered, setIsHovered] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={scrollToTop}
      initial={{ scale: 1 }}
      variants={scaleVariant}
      animate={isHovered ? "enter" : "exit"}
      className="cursor-pointer overflow-hidden rounded-full w-20 h-20 bg-[#323232]"
    >
      <motion.div
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
      </motion.div>
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
