import React from "react";
import { motion } from "framer-motion";
import { isBoldWord } from "@/app/helpers/isBoldWord";
import { ppneuemontreal } from "../../helpers/fonts";

type TailwindTextSize =
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-6xl"
  | string;

type TailwindLeading =
  | "leading-none"
  | "leading-tight"
  | "leading-normal"
  | "leading-loose";

type ParagraphRevealProps = {
  textSize?: TailwindTextSize | number;
  textColor?: string;
  textContent: string;
  textUnit?: string;
  leading?: TailwindLeading | number;
  leadingUnit?: number;
};

function ParagraphReveal({
  textContent,
  textSize,
  textColor,
  textUnit,
}: ParagraphRevealProps) {
  // const paraRef = useRef<HTMLDivElement>(null);

  // const isInView = useInView(paraRef, { margin: "-20px 0px 0px 0px" });

  const textSizeClass =
    typeof textSize === "string" ? textSize : `text-[${textSize}${textUnit}]`;

  // const leadingClass =
  //   typeof leading === "string"
  //     ? leading
  //     : `leading-[${leading}${leadingUnit}]`;

  return (
    <>
      <span className="sr-only">{textContent}</span>
      <div>
        {textContent.split(" ").map((word, index) => (
          <motion.span key={index} className="overflow-hidden inline-block">
            <motion.span
              key={index}
              animate={{
                opacity: 1,
                y: "0%",
              }}
              initial={{
                opacity: 0,
                y: "55%",
              }}
              transition={{
                delay: 0.005 * index,
                duration: 1.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`${ppneuemontreal.className} ${textColor} ${
                isBoldWord(word) ? "font-bold" : "font-normal"
              } ${textSizeClass}  leading-[1.25] tracking-normal inline-block overflow-hidden`}
            >
              {word}&nbsp;
            </motion.span>
          </motion.span>
        ))}
      </div>
      {/* <motion.p
        ref={paraRef}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : "15%",
        }}
        initial={{
          opacity: 0,
          y: "10%",
        }}
        transition={{
          delay: 0.1,
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`${ppneuemontreal.className} ${textColor} font-normal ${textSizeClass}  leading-[1.25] tracking-normal`}
      >
        {textContent}
      </motion.p> */}
    </>
  );
}

export default ParagraphReveal;
