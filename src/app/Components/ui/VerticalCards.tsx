import React from "react";
import { ppneuemontreal } from "../../helpers/fonts";
import { motion } from "framer-motion";
import curology from "../../Assets/curology.jpg";
import restaurant from "../../Assets/restaurant.jpg";
import atelier from "../../Assets/atellier.jpg";
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
  const targetRef = React.useRef<HTMLDivElement>(null);

  return (
    <motion.section
      initial={{
        backgroundColor: "#E1DFDF",
      }}
      transition={{ ease: [0.32, 0, 0.2, 1], duration: 0.7 }}
      whileInView={{ backgroundColor: "#161616" }}
      viewport={{ margin: "-300px" }}
      ref={targetRef}
      className="h-auto px-24 pb-40
    "
    >
      <p className="pt-12 text-7xl text-center text-[#d9dfdf]">
        SELECTED WORKS.
      </p>
      <p className="text-lg text-center pt-2 text-[#d9dfdf]">
        A list of projects I have made
      </p>
      <div className="grid grid-cols-2 gap-6 px-6 pt-12">
        {projects.map((project) => {
          return (
            <div key={project.id} className="overflow-hidden">
              <motion.div className="group relative h-[650px] w-full overflow-hidden">
                <Image
                  src={project.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div
                className={`text-[#d9dfdf] font-medium text-xl uppercase ${ppneuemontreal.className} tracking-wider flex items-center justify-between pt-2`}
              >
                <p> {project.name}</p>
                <div>
                  <span className="text-sm font-base text-[#838383]">2023</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default VerticalCards;
