import React from "react";
import { motion, MotionValue } from "framer-motion";
import PresentationParagraph from "../animations/PresentationParagraph";

function IntroSection({ opacity }: { opacity: MotionValue<number> }) {
  return (
    <>
      <motion.div
        style={{ opacity }}
        className={`sticky top-0 justify-center w-full flex flex-col flex-grow`}
      >
        <section className="h-screen w-full flex flex-col px-4">
          <PresentationParagraph />
        </section>
      </motion.div>
    </>
  );
}

export default IntroSection;
