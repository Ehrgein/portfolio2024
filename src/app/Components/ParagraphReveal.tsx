import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ppneuemontreal } from "../helpers/fonts";

function ParagraphReveal({ children }: { children: React.ReactNode }) {
  const paraRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(paraRef, { margin: "-60px 0px 0px 0px" });

  return (
    <motion.p
      ref={paraRef}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : "15%",
      }}
      initial={{
        opacity: 0,
        y: "15%",
      }}
      transition={{
        delay: 1,
      }}
      className={`${ppneuemontreal.className} font-normal text-[#DFDADA] text-[70px] leading-[1.15] tracking-normal`}
    >
      {children}
    </motion.p>
  );
}

export default ParagraphReveal;
