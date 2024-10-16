"use client";
import React from "react";
import Lenis from "lenis";
import Image from "next/image";
import { motion } from "framer-motion";
import restaurant from "../Assets/restaurant.jpg";
import EnterAnimation from "../Components/EnterAnimation";
import { ppneuemontreal } from "../helpers/fonts";

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
          delay: 2,
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
      <div className="w-full h-[100vh] ">
        <div className="text-3xl pt-16 max-w-screen-xl relative mx-auto my-0 space-y-10">
          <div>
            <h3 className={`uppercase text-5xl font-bold tracking-wide`}>
              Keep Moving
            </h3>
          </div>
          <p className="opacity-90">
            Discover bold, urban high fashion with cutting-edge designs and
            premium streetwear style.
          </p>
          <div className="opacity-90 grid grid-cols-2 w-full">
            <p>Content here</p>
            <p>Content here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
