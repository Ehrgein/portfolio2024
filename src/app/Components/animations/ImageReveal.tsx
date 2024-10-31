import React from "react";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ImageRevealProps = {
  src: StaticImageData;
  alt: string;
};

function ImageReveal({ src, alt }: ImageRevealProps) {
  return (
    <motion.div
      className="h-[60svh] relative"
      initial={{
        clipPath: "inset(100% 0% 0% 0%)",
      }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{
        duration: 0.7,
        ease: [0.19, 1, 0.22, 1],
      }}
      viewport={{ once: true, margin: "-300px" }}
    >
      <Image
        fill
        src={src.src}
        alt="curology logo"
        className="w-full h-full object-cover absolute top-0"
      />
    </motion.div>
  );
}

export default ImageReveal;
