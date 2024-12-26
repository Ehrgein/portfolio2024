import React from "react";
import { motion, MotionValue } from "framer-motion";
import PresentationParagraph from "../animations/PresentationParagraph";
import Scene from "../scene/Scene";
import Socials from "../ui/Socials";

function IntroSection({
  opacity,
  isLoading,
}: {
  opacity: MotionValue<number>;
  isLoading: boolean;
}) {
  console.log(isLoading);

  return (
    <>
      <motion.div
        style={{ opacity }}
        className={`sticky top-0 justify-center w-full flex flex-col z-2`}
      >
        <section className="hidden md:h-screen md:flex mobilesm:h-[calc(100vh-80px)] relative w-full flex-col px-4">
          <PresentationParagraph />
          <Socials />
        </section>
        <section className="md:hidden w-full flex flex-col mobilesm:h-[calc(100vh-80px)] relative px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 2 }}
            className="w-full h-full"
          >
            <Scene />
          </motion.div>
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
