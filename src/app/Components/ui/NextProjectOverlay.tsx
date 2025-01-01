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
      x: "53%",
      y: "53%",
      color: "#FFFFFF",
    },
  };

  const router = useRouter();

  const handleNext = async () => {
    setIsAnimated(true);
    setTimeout(() => {
      //   const nextProject = (projectNumber % projectData.length) + 1; // Cycle to the next project
      router.push(`/${nextProjectIndex}`);
    }, 1005550);
  };

  return (
    <div className="bg-[#212F29] h-screen items-center justify-center relative">
      <div className="w-full h-full top-0 items-center flex justify-center absolute">
        <div className="w-[40vw] h-[65vh] absolute z-[10] uppercase">
          <motion.h2
            variants={headerVariants}
            transition={{ ease: "easeInOut", duration: 5 }}
            animate={isAnimated ? "animated" : "initial"}
            className={`text-white  absolute bottom-[10%] left-[-15%] text-[10rem] ${compacta.className} back leading-none`}
          >
            {firstword}
          </motion.h2>
          {secondword && (
            <motion.h2
              className={`text-white  absolute bottom-[10%] right-[-15%] text-[10rem] leading-none ${compacta.className} back`}
            >
              MOVING
            </motion.h2>
          )}
        </div>
        <motion.div
          variants={nextProjectOverlay}
          initial={{
            width: "40vw",
            height: "65vh",
          }}
          className="overflow-hidden relative z-[20] uppercase"
          animate={isAnimated ? "animate" : "hidden"}
          transition={{ ease: "easeInOut", duration: 5 }}
        >
          <Image
            src={imagesrc}
            onClick={handleNext}
            alt=""
            className="w-full h-full object-cover relative"
          />
          <motion.h2
            variants={headerVariants}
            animate={isAnimated ? "animated" : "initial"}
            transition={{ ease: "easeInOut", duration: 5 }}
            className={`text-[#212F29] absolute bottom-[10%] left-[-15%] text-[10rem] ${compacta.className} back leading-none`}
          >
            {firstword}
          </motion.h2>
          {secondword && (
            <h2
              className={`text-[#212F29]  absolute bottom-[10%] right-[-15%] text-[10rem] ${compacta.className} back leading-none`}
            >
              MOVING
            </h2>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default NextProjectOverlay;
