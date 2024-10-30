import React from "react";
import curology from "../Assets/curology.jpg";
import restaurant from "../Assets/restaurant.jpg";
import atelier from "../Assets/atellier.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import ParagraphReveal from "./ParagraphReveal";
import { ppneuemontreal } from "../helpers/fonts";
import { TransitionLink } from "../helpers/TransitionLink";
import ExitTransition from "./Transitions/ExitTransition";

type cardProps = {
  id: number;
  src: StaticImageData;
  name: string;
  key: number;
  isExiting: boolean;
  setIsExiting: (value: boolean) => void;
};

const Card = ({ id, name, src, key, isExiting, setIsExiting }: cardProps) => {
  return (
    <div className="w-full h-full relative pt-4 ">
      <motion.div
        key={id}
        onClick={() => setIsExiting(true)}
        className="group relative h-[595px] w-[950px] overflow-hidden"
      >
        <TransitionLink href="/1">
          <Image src={src} alt="" fill className="w-full h-full object-cover" />
        </TransitionLink>
      </motion.div>
      <div className="pt-2">
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="text-gray-200 text-xl"
        >
          0{id}. {name}
        </motion.p>
      </div>
    </div>
  );
};

function HorizontalScroll({ isExiting, setIsExiting }) {
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
  ];

  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-55%"]);

  console.log(isExiting, "is exiting");

  return (
    <>
      <div
        className={`${ppneuemontreal.className} bg-[#161616] text-white text-8xl px-20 w-full pt-72`}
      >
        <p className="">SELECTED WORKS.</p>
      </div>
      <section ref={targetRef} className="relative h-[250vh] bg-[#161616]">
        <div className="sticky top-0 flex h-[100vh] items-start overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12">
            {projects.map(({ id, name, src }) => {
              return (
                <Card
                  isExiting={isExiting}
                  setIsExiting={setIsExiting}
                  id={id}
                  name={name}
                  src={src}
                  key={id}
                />
              );
            })}
          </motion.div>
        </div>
      </section>
      {isExiting && <ExitTransition />}
    </>
  );
}

export default HorizontalScroll;
