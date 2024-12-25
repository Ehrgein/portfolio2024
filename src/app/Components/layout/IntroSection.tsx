import React from "react";
import { motion, MotionValue } from "framer-motion";
import PresentationParagraph from "../animations/PresentationParagraph";
import Socials from "../ui/Socials";
import Scene from "../scene/Scene";

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
          <p className="text-[2.1rem] pb-6 px-2 py-0 leading-[1.4]">
            Frontend Developer based in Buenos Aires obsessed with{" "}
            <strong>ux/ui</strong> and <strong>3D.</strong>
          </p>
          {/* <Socials /> */}
        </section>
      </motion.div>
    </>
  );
}

export default IntroSection;
