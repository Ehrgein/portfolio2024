"use client";
import React from "react";
import Lenis from "lenis";
import Image from "next/image";
import { motion } from "framer-motion";
import restaurant from "../Assets/restaurant.jpg";
import EnterAnimation from "../Components/transitions/EnterAnimation";
import { ppneuemontreal, compacta } from "../helpers/fonts";
import red from "../Assets/redimage.jpg";
import orange from "../Assets/orangebtl.jpg";
import Technologies from "../Components/ui/Technologies";
import { lato } from "../helpers/fonts";
import Typography from "../Components/ui/Typography";
import ColorPalette from "../Components/ui/ColorPalette";
import ImageReveal from "../Components/animations/ImageReveal";
import { fontData } from "../Types/Types";
import Challenge from "../Components/ui/Challenge";

const TypographyLato: fontData[] = [
  {
    weight: "",
    fontName: "Lato Regular",
  },
  {
    weight: "font-medium",
    fontName: "Lato Medium",
  },
  {
    weight: "font-bold",
    fontName: "Lato Bold",
  },
];

function Project() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // const { id } = params;

  // const project = {
  //   id: id,
  //   name: "Curology",
  //   src: atellier,
  // };

  return (
    <div className={`$${ppneuemontreal.className}`}>
      <EnterAnimation />
      <motion.div
        className="w-full h-[100vh]" // Full height for initial mount
        animate={{ height: "80vh" }} // Move upwards by 100px
        transition={{
          delay: 1.7,
          duration: 1.2,
          ease: [0.23, 1, 0.32, 1], // Ease-in-out
        }}
      >
        <Image
          alt="hello"
          src={restaurant}
          className="w-full h-full object-cover pointer-events-none"
        />
      </motion.div>
      <div className="w-full bg-[#f8f7f7]">
        <div className="text-3xl pt-16 max-w-[1200px] relative mx-auto my-0 space-y-4 pb-40">
          <div>
            <h1
              className={`${compacta.className} uppercase text-4xl font-bold tracking-wide`}
            >
              Keep Moving
            </h1>
          </div>

          <p className="opacity-90 text-lg flex-grow">
            Discover bold, urban high fashion with cutting-edge designs and
            premium streetwear style.
          </p>
          <div className="opacity-90 grid grid-cols-3 gap-12 ">
            <Technologies />
          </div>
          <div className="grid grid-cols-2 gap-5 pt-12">
            <ImageReveal src={red} alt="s" />
            <ImageReveal src={orange} alt="s" />
          </div>
          <Challenge />
          <div className="grid grid-cols-2 gap-5 pt-16">
            <ImageReveal src={orange} alt="orange" />
            <ImageReveal src={red} alt="orange" />
          </div>
          <Typography
            mainParagraph="Lato was selected for this project due to its clean, modern feel,
          which aligns well with the streetwear focus of the e-commerce site.
          Its sleek design enhances the visual appeal while resonating with the
          target audience, offering a polished yet contemporary look that
          complements the brand’s identity."
            // fontText={["Lato Regular", "Lato Medium", "Lato Bold"]}
            fontClassname={lato.className}
            fontText={TypographyLato}
          />
          <ColorPalette />
        </div>
      </div>
    </div>
    // stop here
  );
}

export default Project;
