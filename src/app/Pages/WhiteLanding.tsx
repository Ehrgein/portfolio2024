"use client";
import React, { useRef } from "react";
import WhiteNavbar from "../Components/layout/WhiteNavbar";
import PresentationParagraph from "../Components/animations/PresentationParagraph";
import FooterWhite from "../Components/layout/FooterWhite";

const WhiteLanding = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  //[#E1DFDF]

  return (
    <div className="bg-[#E1DFDF] min-h-screen flex px-4 py-2 blend">
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
