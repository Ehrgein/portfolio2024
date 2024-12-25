import React from "react";
import { motion, MotionValue } from "framer-motion";
import PresentationParagraph from "../animations/PresentationParagraph";
import Scene from "../scene/Scene";
import Socials from "../ui/Socials";

function IntroSection({ opacity }: { opacity: MotionValue<number> }) {
  return (
    <>
      <motion.div
        style={{ opacity }}
        className={`sticky top-0 justify-center w-full flex flex-col z-2`}
      >
        <section className="hidden md:flex flex-col h-screen w-full relative px-4">
          <PresentationParagraph />

          <Socials />
        </section>
        <section className="md:hidden w-full flex flex-col h-screen relative px-4">
          <Scene />
        </section>
      </motion.div>
    </>
  );
}

export default IntroSection;
