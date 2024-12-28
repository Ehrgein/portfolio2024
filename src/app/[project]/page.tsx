"use client";
import React from "react";
import Lenis from "lenis";
import { ppneuemontreal } from "../helpers/fonts";

import FixedProject from "../Components/ui/FixedProject";

// const TypographyLato: fontData[] = [
//   {
//     weight: "",
//     fontName: "Lato Regular",
//   },
//   {
//     weight: "font-medium",
//     fontName: "Lato Medium",
//   },
//   {
//     weight: "font-bold",
//     fontName: "Lato Bold",
//   },
// ];

function Project() {
  React.useEffect(() => {
    // Not rendering on the server
    if (typeof window !== "undefined") {
      const lenis = new Lenis();

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    }
  }, []);

  return (
    <div className={`$${ppneuemontreal.className}`}>
      {/* <EnterAnimation /> */}
      {/* <motion.div
        className="w-full h-[100vh]" // Full height for initial mount
        animate={{ height: "80vh" }} // Move upwards by 100px
        transition={{
          delay: 1.7,
          duration: 1.2,
          ease: [0.23, 1, 0.32, 1], // Ease-in-out
        }}
      > */}
      {/* <motion.div className="w-full h-full">
        <Image
          alt="hello"
          src={restaurant}
          className="w-full h-full object-cover pointer-events-none"
        />
      </motion.div> */}
      {/* <div className="w-full">
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
            <ImageReveal height="550px" src={red} alt="s" />
            <ImageReveal height="550px" src={orange} alt="s" />
          </div>
          <Challenge />
          <div className="grid grid-cols-2 gap-5 pt-16">
            <ImageReveal height="550px" src={orange} alt="orange" />
            <ImageReveal height="550px" src={red} alt="orange" />
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
      </div> */}
      {/* here goes the fixedd left */}
      <FixedProject />
    </div>
  );
}

export default Project;
