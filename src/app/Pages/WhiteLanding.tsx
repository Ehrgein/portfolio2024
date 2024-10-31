"use client";
import React, { useRef } from "react";
import { compacta, ppneuemontreal } from "../helpers/fonts";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

import WhiteNavbar from "../Components/layout/WhiteNavbar";

import PresentationParagraph from "../Components/animations/PresentationParagraph";
import FooterWhite from "../Components/layout/FooterWhite";

const WhiteLanding = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  const headercontrols = useAnimation();

  return (
    <div className="bg-[#E1DFDF] min-h-screen flex px-4 py-2">
      <div className="w-full flex flex-col ">
        <WhiteNavbar />
        <main
          ref={mainRef}
          className={` justify-center flex flex-col flex-grow`}
        >
          {/* <Presentation /> */}
          <PresentationParagraph />
        </main>
        <FooterWhite />
      </div>
    </div>
  );
};

export default WhiteLanding;
