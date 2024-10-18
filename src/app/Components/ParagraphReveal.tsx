import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ppneuemontreal } from "../helpers/fonts";

type TailwindTextSize = "text-sm" | "text-base" | "text-lg" | "text-xl";

type TailwindLeading =
  | "leading-none"
  | "leading-tight"
  | "leading-normal"
  | "leading-loose";

type ParagraphRevealProps = {
  children: React.ReactNode;
  textSize?: TailwindTextSize | number;
  textColor?: string;
  textUnit?: string;
  leading?: TailwindLeading | number;
  leadingUnit?: number;
};

function ParagraphReveal({
  children,
  textSize,
  textColor,
  textUnit,
  leading,
  leadingUnit,
}: ParagraphRevealProps) {
  const paraRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(paraRef, { margin: "-20px 0px 0px 0px" });

  const textSizeClass =
    typeof textSize === "string" ? textSize : `text-[${textSize}${textUnit}]`;

  const leadingClass =
    typeof leading === "string"
      ? leading
      : `leading-[${leading}${leadingUnit}]`;

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
        delay: 0.1,
      }}
      className={`${ppneuemontreal.className} font-normal ${textSizeClass} ${leadingClass} leading-8 tracking-normal`}
    >
      {children}
    </motion.p>
  );
}

export default ParagraphReveal;
