import React from "react";
import { motion } from "framer-motion";

function SmallTextReveal({ textContent }: { textContent: string }) {
  const headerParentVariants = {
    animate: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const charVariants = {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      <span className="sr-only">{textContent}</span>
      <motion.h1
        variants={headerParentVariants}
        initial="initial"
        animate="animate"
        className="overflow-hidden"
      >
        {textContent.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className={`tracking-normal inline-block`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </>
  );
}

export default SmallTextReveal;
