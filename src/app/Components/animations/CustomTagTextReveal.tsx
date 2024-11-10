import React from "react";
import { motion } from "framer-motion";
import { ppneuemontreal } from "@/app/helpers/fonts";

function CustomTagTextReveal({
  textContent,
  textColor,
  textSize,
  leading,
  delayIndex,
}: {
  textContent: string;
  textColor: string;
  textSize: string;
  leading: string;
  delayIndex: number;
}) {
  const elementRef = React.useRef<HTMLHeadingElement>(null);

  // const headerParentVariants = {
  //   animate: {
  //     transition: {
  //       staggerChildren: 0.03,
  //     },
  //   },
  // };

  // const charVariants = {
  //   initial: { opacity: 0 },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       duration: 5,
  //       ease: [0.25, 0.1, 0.25, 1],
  //       staggerChildren: 4,
  //       delay: 9,
  //     },
  //   },
  // };

  return (
    <>
      <span className="sr-only">{textContent}</span>
      <motion.div>
        {textContent.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="overflow-hidden  inline-block align-bottom"
          >
            <motion.span
              key={index}
              initial={{
                y: "100%",
              }}
              whileInView={{ y: "0" }}
              viewport={{ root: elementRef, margin: "-100px 0px", once: true }}
              // animate={{
              //   y: "0%",
              // }}
              transition={{
                delay: delayIndex,
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`${ppneuemontreal.className} ${textColor} "font-normal"
              } ${textSize} tracking-normal ${leading} font-medium  inline-block overflow-hidden`}
            >
              {word}&nbsp;
            </motion.span>
          </motion.span>
        ))}
      </motion.div>
    </>
  );
}

export default CustomTagTextReveal;
