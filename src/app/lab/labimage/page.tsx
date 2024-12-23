"use client";
import React from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/app/Components/scene/Scene"), {
  ssr: false,
});

function LabImage() {
  return (
    <div className="h-screen">
      <Scene />
      <div className="w-24 h-24">
        <div className="w-24  bg-blue-500"></div>
      </div>
    </div>
  );
}

export default LabImage;
