import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ImageRevealProps = {
  src: StaticImageData;
  alt: string;
  height: string;
};

function ImageReveal({ src, alt, height }: ImageRevealProps) {
  return (
    <motion.div
      style={{ height: height }}
      className={`m relative overflow-hidden`}
      initial={{
        clipPath: "inset(100% 0% 0% 0%)",
      }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <Image
        fill
        src={src.src}
        alt={alt}
        className="w-full h-full object-cover absolute top-0"
      />
    </motion.div>
  );
}

export default ImageReveal;
