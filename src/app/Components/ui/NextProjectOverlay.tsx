import React from "react";
import { motion } from "framer-motion";
import { nextProjectOverlay } from "@/app/helpers/variants";
import { compacta } from "@/app/helpers/fonts";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Image from "next/image";

function NextProjectOverlay({
  imagesrc,
  firstword,
  secondword,
  nextProjectIndex,
}: {
  imagesrc: StaticImageData;
  firstword: string;
  secondword?: string;
  nextProjectIndex: number;
}) {
  const [isAnimated, setIsAnimated] = React.useState(false);

  const headerVariants = {
    initial: {
      x: "0%",
      y: "0%",
    },
    animated: {
      x: "0%",
      y: "0%",
      color: "#FFFFFF",
    },
  };

  const colorVariants = {
    initial: { color: "#212F29" },
    exit: { color: "#FFFFFF" },
  };

  const overlayVariants = {
    initial: {
      width: "60vw",
      height: "75vh",
    },
    animate: {
      width: "75vw",
      height: "80vh",
    },
  };

  const router = useRouter();

  const handleNext = async () => {
    setIsAnimated(true);
    setTimeout(() => {
      //   const nextProject = (projectNumber % projectData.length) + 1; // Cycle to the next project
      router.push(`/${nextProjectIndex}`);
    }, 1000);
  };

  return (
    <div className="bg-[#212F29] h-screen items-center justify-center relative">
      <div className="w-full h-full top-0 items-center flex justify-center absolute">
        <motion.div
          variants={overlayVariants}
          initial={"initial"}
          animate={isAnimated ? "animate" : "initial"}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="w-[60vw] h-[75vh] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-[10] uppercase pointer-events-none flex flex-col"
        >
          {/* overlay back */}
          <motion.h2
            className={`text-white text-[10rem] ${compacta.className} back leading-none invisible`}
          >
            _
          </motion.h2>
          <motion.h2
            variants={headerVariants}
            transition={{ ease: "easeInOut", duration: 1 }}
            animate={isAnimated ? "animated" : "initial"}
            className={`text-white text-[10rem] ${compacta.className} back leading-none`}
          >
            {firstword}
          </motion.h2>
          <h2 className="leading-[.74]"></h2>
          {secondword && (
            <>
              <motion.h2
                className={`text-white text-[10rem] leading-none ${compacta.className} back self-end`}
              >
                MOVING
              </motion.h2>
            </>
          )}
        </motion.div>
        {/* overlay front */}
        <motion.div
          variants={nextProjectOverlay}
          initial={{
            width: "40vw",
            height: "65vh",
          }}
          className="overflow-hidden relative z-[20] uppercase"
          animate={isAnimated ? "animate" : "hidden"}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          <Image
            src={imagesrc}
            onClick={handleNext}
            alt=""
            className="w-full h-full object-cover relative"
          />
          <motion.div
            variants={overlayVariants}
            initial={"initial"}
            animate={isAnimated ? "animate" : "initial"}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="w-[60vw] h-[75vh] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 pointer-events-none flex flex-col "
          >
            <motion.h2
              className={`text-white text-[10rem] ${compacta.className} back leading-none invisible`}
            >
              _
            </motion.h2>
            <motion.h2
              variants={headerVariants}
              animate={isAnimated ? "animated" : "initial"}
              transition={{ ease: "easeInOut", duration: 1 }}
              className={`text-[#212F29] text-[10rem] ${compacta.className} back leading-none`}
            >
              {firstword}
            </motion.h2>
            {secondword && (
              <>
                <motion.h2
                  variants={colorVariants}
                  initial={"initial"}
                  animate={isAnimated ? "exit" : "initial"}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  className={`text-[#212F29] text-[10rem] ${compacta.className} back leading-none self-end`}
                >
                  MOVING
                </motion.h2>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default NextProjectOverlay;
