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

type IntroHeaderRevealProps = {
  textSize?: TailwindTextSize | number | string;
  textColor?: string;
  textContent: string;
  textUnit?: string;
  leading?: TailwindLeading | number;
  leadingUnit?: number;
};

function IntroHeaderReveal({
  textContent,
  textSize,
  textColor,
  textUnit,
}: IntroHeaderRevealProps) {
  const textSizeClass =
    typeof textSize === "string" ? textSize : `text-[${textSize}${textUnit}]`;

  return (
    <>
      <span className="sr-only">{textContent}</span>
      <div>
        {textContent.split(" ").map((word, index) => (
          <motion.span key={index} className="overflow-hidden inline-block">
            <motion.span
              key={index}
              animate={{
                y: "0%",
              }}
              initial={{
                y: "95%",
              }}
              transition={{
                delay: 0.005 * index,
                duration: 1.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`${ppneuemontreal.className} ${textColor} ${
                isBoldWord(word) ? "font-bold" : "font-normal"
              } ${textSizeClass} tracking-normal  leading-[1.25] text-left mobilemd:text-center inline-block overflow-hidden`}
            >
              {word}&nbsp;
            </motion.span>
          </motion.span>
        ))}
      </div>
    </>
  );
}

export default IntroHeaderReveal;
