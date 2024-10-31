import React from "react";
import arrow from "../Assets/svgs/arrow.svg";

import * as motion from "framer-motion/client";
import Image from "next/image";

function ArrowBounce() {
  return (
    <motion.div
      className="border h-12 w-12 rounded-full flex justify-center border-black"
      animate={{
        y: [0, 20, 0],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        stiffness: 50,
        damping: 4,
      }}
    >
      <Image src={arrow} alt="downward arrow" />
    </motion.div>
  );
}

export default ArrowBounce;
