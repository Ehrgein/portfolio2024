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
        <section className="md:h-screen mobilesm:h-[calc(100vh-80px)] relative w-full flex flex-col px-4">
          <PresentationParagraph />

          <Socials />
        </section>
        <section className="md:hidden w-full flex flex-col h-screen relative px-4">
          <Scene />
          <p className="text-[2rem] pb-4 leading-[1.45]">
            Frontend developer based in Buenos Aires. Obsessed with{" "}
            <strong>ux/ui</strong> and <strong>3D.</strong>
          </p>
        </section>
      </motion.div>
    </>
  );
}

export default IntroSection;
