import React from "react";
import { motion } from "framer-motion";
import { ppneuemontreal } from "@/app/helpers/fonts";

function CustomTagTextReveal({
  textContent,
  textColor,
  textSize,
  leading,
  delayIndex,
  fontWeight,
}: {
  textContent: string | undefined;
  textColor: string;
  textSize: string;
  leading: string;
  fontWeight?: string;
  delayIndex: number;
}) {
  const elementRef = React.useRef<HTMLHeadingElement>(null);

  return (
    <>
      <span className="sr-only">{textContent}</span>
      <motion.div>
        {textContent?.split(" ").map((word, index) => (
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
              transition={{
                delay: delayIndex,
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`${ppneuemontreal.className} ${textColor} "font-normal"
              } ${textSize} tracking-normal ${leading}  ${
                fontWeight ? fontWeight : "font-medium"
              }  inline-block overflow-hidden`}
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
