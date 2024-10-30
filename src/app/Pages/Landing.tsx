"use client";
import React, { useRef } from "react";
import { compacta, ppneuemontreal } from "../helpers/fonts";
import { motion, useAnimation } from "framer-motion";

import NavBar from "../Components/NavBar";

const Landing = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#161616] p-7 min-h-screen flex ">
      <div className="w-full flex flex-col">
        <NavBar />
        <main
          ref={mainRef}
          className={` justify-center flex flex-col flex-grow`}
        >
          <section className="px-40 flex flex-col flex-grow items-center justify-center gap-1 w-full h-full">
            <motion.div
              className="w-full px-36 pb-20 text-center"
              initial={{ y: "15%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.75 }}
                  className={`${compacta.className} text-[#DFDADA] text-center text-6xl lg:text-[160px] tracking-widest w-full block leading-[10rem]`}
                >
                  ALEXIS FORD
                </motion.h1>
              </div>
              <div className="w-full flex-grow flex flex-col space-y-1 tracking-wide pt-2">
                <p
                  className={`${ppneuemontreal.className} font-medium text-base w-full text-[#DFDADA] uppercase`}
                >
                  FRONTEND <strong>DEVELOPER</strong> With a passion for{" "}
                  <strong> UX/UI</strong>
                </p>
                <p
                  className={`${ppneuemontreal.className} font-medium text-base w-full text-[#DFDADA]`}
                >
                  BASED IN BUENOS AIRES
                </p>
              </div>
            </motion.div>

            {/* <ArrowBounce /> */}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Landing;
