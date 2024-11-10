import React from "react";
import { animate, motion, useInView } from "framer-motion";
import { ppneuemontreal } from "@/app/helpers/fonts";

function SmallParaReveal({
  textContent,
  textSize,
}: {
  textContent: string;
  textSize: string;
}) {
  const elementRef = React.useRef<HTMLHeadingElement>(null);

  const headerParentVariants = {
    animate: {
      transition: {
        staggerChildren: 2,
      },
    },
  };

  return (
    <>
      <p className="sr-only">{textContent}</p>
      {textContent.split("").map((word, index) => (
        <motion.span
          variants={headerParentVariants}
          key={index}
          className="overflow-hidden inline-block "
        >
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            whileInView={{ y: "0" }}
            viewport={{ root: elementRef, once: true, margin: "-100px 0px" }}
            // animate={{
            //   y: "0%",
            // }}
            // initial={{
            //   y: "95%",
            // }}
            // whileInView={"animate"}
            transition={{
              delay: 0.04 * index,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={`${ppneuemontreal.className} ${textSize} font-medium text-[#D1CEC6] leading-[1.25] tracking-[-4px] inline-block overflow-hidden`}
          >
            {word}&nbsp;
          </motion.span>
        </motion.span>
      ))}
    </>
  );
}

export default SmallParaReveal;
