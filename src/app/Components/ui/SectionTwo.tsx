import React from "react";
import Image from "next/image";
import pinkcrlg from "../../Assets/pinkcrlg.jpg";
import { compacta } from "@/app/helpers/fonts";
import { motion } from "framer-motion";
import ProjectList from "./ProjectList";

function SectionTwo() {
  return (
    <div className="text-[#DFD9D9]">
      {/* <h3 className="text-[2vw]">SELECTED WORKS.</h3>
      <div className="w-full relative h-full flex gap-[3vw] justify-center pt-20">
        <div className="absolute left-[-10%] top-[45%] h-[585px] w-[450px]">
          <Image
            className="w-full h-full object-cover"
            alt="hi"
            src={pinkcrlg}
          />
        </div>
        <motion.div className="absolute top-[45%] h-[585px] w-[450px]">
          <Image
            className="w-full h-full object-cover"
            alt="hi"
            src={pinkcrlg}
          />
          <p className={`${compacta.className} pt-2 text-6xl text-center`}>
            CUROLOGY
          </p>
        </motion.div>
        <div className="absolute right-[-10%] top-[45%] h-[585px] w-[450px]">
          <Image
            className="w-full h-full object-cover"
            alt="hi"
            src={pinkcrlg}
          />
        </div>
      </div> */}
      <ProjectList />
    </div>
  );
}

export default SectionTwo;
