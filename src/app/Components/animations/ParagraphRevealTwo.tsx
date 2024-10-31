import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  | "leading-loose";

type ParagraphRevealProps = {
  children?: string;
  textSize?: TailwindTextSize | number;
  textColor?: string;
  textUnit?: string;
  leading?: TailwindLeading | number;
  leadingUnit?: number;
};

function ParagraphRevealTwo({
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

  const defaultAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const text = (
    <>
      Frontend developer based in Buenos Aires who loves bringing
      <strong> ideas</strong> into visually appealing, intuitive-to-use
      interfaces that enhance user experience. Obsessed with{" "}
      <strong>ux/ui </strong>and
      <strong> 3D</strong>
      <span className={`${compacta.className}`}>.</span>
    </>
  );

  return (
    <>
      <span className="sr-only">{children}</span>
      <motion.span initial="hidden" animate="visible" aria-hidden>
        {React.Children.map(text.props.children, (child, index) => {
          if (typeof child === "string") {
            // Split the string into words and render each word separately
            return child.split(" ").map((word, i) => (
              <motion.span
                className={`${ppneuemontreal.className} ${textColor} font-normal ${textSizeClass} leading-[1.25] tracking-normal`}
                key={`${index}-${i}`}
                variants={defaultAnimations}
                transition={{
                  delay: (index + i) * 0.1,
                }}
              >
                {word}{" "}
              </motion.span>
            ));
          } else {
            // For elements (e.g., <strong>), wrap them directly in a motion span
            return (
              <motion.span key={index} variants={defaultAnimations}>
                {child}
              </motion.span>
            );
          }
        })}
      </motion.span>
      <motion.p
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
        className={`${ppneuemontreal.className} ${textColor} font-normal ${textSizeClass} leading-[1.25] tracking-normal`}
      >
        {children}
      </motion.p>
    </>
  );
}

export default ParagraphRevealTwo;
