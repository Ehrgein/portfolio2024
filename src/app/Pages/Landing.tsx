"use client";
import React, { useEffect, useState, useRef } from "react";

import { compacta, ppneuemontreal } from "../helpers/fonts";
import { useScroll, useInView } from "framer-motion";
import NavBar from "../Components/NavBar";
import { NavColor } from "../Types/Types";

const Landing = () => {
  const [navColor, setNavColor] = useState<NavColor>("#121212");
  const [backgroundNavColor, setBackgroundNavColor] = useState("white");
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const isInView = useInView(mainRef, { margin: "-30px 0px 0px 0px" });

  useEffect(() => {
    // Handle scroll changes
    const handleScrollChange = (value: number) => {
      const newColor = isInView ? "#121212" : "#DCD8C0";
      setNavColor(newColor);
    };

    handleScrollChange(scrollY.get()); // Trigger the color change on mount

    // Subscribe to scroll changes
    const unsubscribeScroll = scrollY.on("change", handleScrollChange);

    // Cleanup on component unmount
    return () => unsubscribeScroll();
  }, [scrollY, isInView]);

  return (
    <div className="bg-[#161616] p-7 min-h-screen flex ">
      <div className="w-full flex flex-col">
        <NavBar navColor={navColor} backgroundNavColor="" />
        <main
          ref={mainRef}
          className={`${ppneuemontreal.className} justify-center flex flex-col flex-grow`}
        >
          <section className="px-40 flex flex-col flex-grow items-center justify-center gap-1 w-full h-full">
            <div className="w-full px-36 pb-20 text-center">
              <h1
                className={`${compacta.className} text-[#DFDADA] text-center text-6xl lg:text-[160px] tracking-widest w-full block leading-[10rem]`}
              >
                ALEXIS FORD
              </h1>
              <div className="w-full flex-grow flex flex-col space-y-1 tracking-wide pt-2">
                <p
                  className={` ${ppneuemontreal.className}text-3xl w-full text-[#DFDADA] uppercase`}
                >
                  FRONTEND <strong>DEVELOPER</strong> With a passion for{" "}
                  <strong> UX/UI</strong>
                </p>
                <p
                  className={` ${ppneuemontreal.className}text-3xl w-full text-[#DFDADA]`}
                >
                  BASED IN BUENOS AIRES
                </p>
              </div>
            </div>

            {/* <ArrowBounce /> */}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Landing;
