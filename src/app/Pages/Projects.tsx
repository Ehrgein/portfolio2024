import React from "react";
import Image from "next/image";
import curology from "../Assets/curology.jpg";
import atelier from "../Assets/atellier.jpg";
import restaurant from "../Assets/restaurant.jpg";
import { compacta, ppneuemontreal } from "../helpers/fonts";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Curology",
      src: curology,
    },
    {
      id: 2,
      name: "Curology",
      src: atelier,
    },
    {
      id: 3,
      name: "Curology",
      src: restaurant,
    },
    {
      id: 4,
      name: "Curology",
      src: atelier,
    },
    {
      id: 5,
      name: "Curology",
      src: curology,
    },
  ];

  return (
    <div className="bg-[#161616]  text-zinc-100 h-dvh w-full flex flex-col px-32 pb-4">
      <div className="flex gap-4 pt-20">
        {projects.map((project) => {
          return (
            <motion.div
              key={project.id}
              className="w-[400px] h-[600px] object-cover lg:flex"
              initial={{ filter: "grayscale(100%)" }}
              whileHover={{ filter: "none" }}
              animate={{ filter: "grayscale(100%)" }}
              transition={{ duration: 1 }}
            >
              <Image
                src={project.src}
                alt="curology logo"
                className="w-full h-auto object-cover "
              />
            </motion.div>
          );
        })}
      </div>
      <div
        className={`${compacta.className} text-[84px] text-[#DCD8C0] text-center tracking-[0.12em] px-12 leading-tight`}
      >
        CUROLOGY
      </div>
    </div>
  );
};

export default Projects;

// <h2
// className={` ${ppneuemontreal.className} tracking-wider text-[#9CB0A3] text-2xl  w-fit text-left py-1 border-white pb-12 underline`}
// >
// SELECTED WORKS
// </h2>
// <div className="flex flex-col gap-4">
// <div className="pt-4 flex items-center border-white border-t-2">
//   <h2
//     className={` ${compacta.className} tracking-wider text-[#9CB0A3] text-9xl text-left  `}
//   >
//     CUROLOGY
//     <span
//       className={`${compacta.className} text-sm tracking-widest text-[#d1c9c9]`}
//     >
//       01
//     </span>
//   </h2>
// </div>
// <div className="py-4 flex items-center border-white border-t-2 border-b-2">
//   <h2
//     className={` ${compacta.className} tracking-wider text-[#9CB0A3] text-9xl text-left  `}
//   >
//     KEEP MOVING
//   </h2>
// </div>
// <div className="flex items-center border-white ">
//   <h2
//     className={` ${compacta.className} tracking-wider text-[#9CB0A3] text-9xl text-left  `}
//   >
//     RESONATE
//   </h2>
// </div>
// <div className="py-4 flex items-center border-white border-t-2 border-b-2">
//   <h2
//     className={` ${compacta.className} tracking-wider text-[#9CB0A3] text-9xl text-left  `}
//   >
//     MANAGERY
//   </h2>
// </div>
// </div>
