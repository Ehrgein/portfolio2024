"use client";
import React from "react";
import dynamic from "next/dynamic";
import MagneticSVG from "@/app/Components/animations/MagneticSVG";

const Scene = dynamic(() => import("@/app/Components/scene/Scene"), {
  ssr: false,
});

function LabImage() {
  return (
    <div className="h-screen">
      <Scene />
      <MagneticSVG>
        <div className="w-24 h-24">
          <div className="w-24  bg-blue-500"></div>
        </div>
      </MagneticSVG>
    </div>
  );
}

export default LabImage;
