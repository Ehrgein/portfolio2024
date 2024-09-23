import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { ppneuemontreal } from "../helpers/fonts";

function ParagraphReveal({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const paraRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState<Number>(0);

  const isInView = useInView(paraRef, { margin: "-60px 0px 0px 0px" });

  useEffect(() => {
    // Handle scroll changes
    const handleScrollChange = (value: number) => {
      const opacity = isInView ? 1 : 0;
      setOpacity(opacity);
    };

    handleScrollChange(scrollY.get()); // Trigger the color change on mount

    // Subscribe to scroll changes
    const unsubscribeScroll = scrollY.on("change", handleScrollChange);

    // Cleanup on component unmount
    return () => unsubscribeScroll();
  }, [scrollY, isInView]);

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
      className={`${ppneuemontreal.className} text-[#DFDADA] text-[80px] leading-[1.15] tracking-normal`}
    >
      {children}
    </motion.p>
  );
}

export default ParagraphReveal;
