import React from "react";
import { ppneuemontreal, compacta } from "../helpers/fonts";
import { motion } from "framer-motion";
import curology from "../Assets/curology.jpg";
import restaurant from "../Assets/restaurant.jpg";
import atelier from "../Assets/atellier.jpg";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Keep Moving",
    src: curology,
  },
  {
    id: 2,
    name: "Atelier",
    src: atelier,
  },
  {
    id: 3,
    name: "Restaurant",
    src: restaurant,
  },
  {
    id: 4,
    name: "Curology",
    src: atelier,
  },
  // {
];

function VerticalCards() {
  return (
    <section
      className="bg-[#161616] h-auto px-24 pb-40
    "
    >
      <h2
        className={`${ppneuemontreal.className} text-7xl font-medium text-white tracking-wider`}
      >
        SELECTED WORKS.
      </h2>
      <div className="grid grid-cols-2 gap-6 pt-24">
        {projects.map((project) => {
          return (
            <div className="overflow-hidden">
              <motion.div className="group relative h-[650px] w-full overflow-hidden pb-6">
                <Image
                  src={project.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div
                className={`text-white font-medium text-xl uppercase ${ppneuemontreal.className} tracking-wider flex items-center justify-between`}
              >
                <p> {project.name}</p>
                <div>
                  <span className="text-sm font-base text-[#adacac]">2023</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default VerticalCards;
