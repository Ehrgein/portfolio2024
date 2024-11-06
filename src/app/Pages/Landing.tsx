"use client";
import React, { useRef } from "react";
import NavBar from "../Components/layout/NavBar";
import PresentationParagraph from "../Components/animations/PresentationParagraph";

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
          <PresentationParagraph />
        </main>
      </div>
    </div>
  );
};

export default Landing;
