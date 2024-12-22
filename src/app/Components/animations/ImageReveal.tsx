import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ImageRevealProps = {
  src: StaticImageData;
  alt: string;
  height: string;
};

function ImageReveal({ src, alt, height }: ImageRevealProps) {
  const galleryRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(galleryRef, { amount: 1 });

  const [isGalleryPresent, setIsGalleryPresent] = React.useState(false);

  React.useEffect(() => {
    if (isInView && !isGalleryPresent) {
      setIsGalleryPresent(true);
    }
  }, [isInView, isGalleryPresent]);

  return (
    <motion.div ref={galleryRef}>
      <motion.div
        style={{ height: height }}
        className={`relative overflow-hidden`}
        initial={{
          clipPath: "inset(0% 0% 100% 0%)",
        }}
        animate={
          isGalleryPresent
            ? { clipPath: "inset(0% 0% 0% 0%" }
            : { clipPath: "inset(0% 0% 100% 0%)" }
        }
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
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
    </motion.div>
  );
}

export default ImageReveal;
