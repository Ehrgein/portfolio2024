"use client";
import React from "react";

import { motion } from "framer-motion";

// const Scene = dynamic(() => import("@/app/Components/scene/Scene"), {
//   ssr: false,
// });

function LabImage() {
  return (
    // <div className="h-screen">
    //   <Scene />
    //   <div className="w-24 h-24">
    //     <div className="w-24  bg-blue-500"></div>
    //   </div>
    // </div>
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <motion.h1 className="font-bold text-white text-7xl md:text-9xl relative z-10">
        PARALLAX
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0 imageffs object-cover"
        style={{
          backgroundImage: `url(/"https://cataas.com/cat")`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/"https://cataas.com/cat"`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div className="bg-white pt-80 pb-80 h-[800px]"></div>
    </div>
  );
}

export default LabImage;
