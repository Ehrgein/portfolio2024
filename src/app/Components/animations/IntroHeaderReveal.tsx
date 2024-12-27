import React from "react";
import { motion } from "framer-motion";
import { isBoldWord } from "@/app/helpers/isBoldWord";
import { ppneuemontreal, compacta } from "../../helpers/fonts";

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
  | "leading-loose"
  | string;

type FontWeight = "font-bold" | "font-medium";

type IntroHeaderRevealProps = {
  textSize?: TailwindTextSize | number | string;
  textColor?: string;
  textContent: string;
  textUnit?: string;
  leading?: TailwindLeading | number;
  leadingUnit?: number;
  fontWeight?: string | FontWeight;
  alignment?: string;

  fontFamily?: "compacta" | "ppneummontreal";
};

function IntroHeaderReveal({
  textContent,
  textSize,
  textColor,
  textUnit,
  leading,
  alignment,
  fontFamily,
}: IntroHeaderRevealProps) {
  const textSizeClass =
    typeof textSize === "string" ? textSize : `text-[${textSize}${textUnit}]`;

  const alignmentTemplate = alignment ? `w-full ${alignment}` : "";

  const chosenFont =
    fontFamily === "compacta" ? compacta.className : ppneuemontreal.className;

  return (
    <>
      <span className="sr-only">{textContent}</span>
      <div className={`${alignment ? "w-full" : ""}`}>
        {textContent.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className={`overflow-hidden inline-block ${alignmentTemplate}`}
          >
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
              className={`${chosenFont} ${textColor} ${
                isBoldWord(word) ? "font-bold" : "font-normal"
              } ${textSizeClass} tracking-normal 
              mobilesm: w-full mobilemd:w-fit
              ${
                leading ? leading : "leading-[1.25]"
              } text-left mobilemd:text-center inline-block overflow-hidden`}
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
