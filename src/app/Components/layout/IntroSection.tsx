import React from "react";
import { motion, MotionValue } from "framer-motion";
import PresentationParagraph from "../animations/PresentationParagraph";
import Scene from "../scene/Scene";

function IntroSection({ opacity }: { opacity: MotionValue<number> }) {
  return (
    <>
      <motion.div
        style={{ opacity }}
        className={`sticky top-0 justify-center w-full flex flex-col z-2`}
      >
        <section className="h-screen relative w-full flex flex-col px-4">
          <PresentationParagraph />
          <Scene />
        </section>
      </motion.div>
    </>
  );
}

export default IntroSection;
