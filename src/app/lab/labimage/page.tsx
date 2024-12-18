"use client";
import React from "react";
import dynamic from "next/dynamic";

export function LabImage() {
  
const Scene = dynamic(()=> import('@/app/Components/scene/Scene'), {
  ssr:false,
})


  return (
    <div className="h-screen">
      <Scene />
    </div>
  );
}

export default LabImage;
