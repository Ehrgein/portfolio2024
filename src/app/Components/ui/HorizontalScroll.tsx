import React from "react";
import curology from "../../Assets/curology.jpg";
import restaurant from "../../Assets/restaurant.jpg";
import atelier from "../../Assets/atellier.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { TransitionLink } from "../../helpers/TransitionLink";
import ExitTransition from "../transitions/ExitTransition";

interface ExitType {
  isExiting: boolean;
  setIsExiting: (value: boolean) => void;
}

interface CardProps extends ExitType {
  id: number;
  src: StaticImageData;
  name: string;
  key: number;
}

const Card = ({ id, name, src, key, setIsExiting }: CardProps) => {
  return (
    <div className="w-full h-full relative pt-4 ">
      <motion.div
        key={key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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

function HorizontalScroll({ isExiting, setIsExiting }: ExitType) {
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
      <motion.section ref={targetRef} className="relative h-[350vh]  px-4">
        <div className="sticky top-0 flex h-[100vh] items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: [0.32, 0, 0.2, 1], duration: 0.7 }}
            style={{ x }}
            className="flex justify-center items-center gap-12"
          >
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
      </motion.section>
      {isExiting && <ExitTransition />}
    </>
  );
}

export default HorizontalScroll;
