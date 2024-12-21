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
    </div>
  );
}

export default LabImage;
