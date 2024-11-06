import React from "react";
import ParagraphReveal from "../animations/ParagraphReveal";
import { motion, useInView } from "framer-motion";
import SmallTextReveal from "../animations/SmallTextReveal";

function ProjectList() {
  const headerRef = React.useRef<HTMLHeadingElement>(null);
  const projectsRef = React.useRef<HTMLHeadingElement>(null);
  const isInView = useInView(projectsRef, { amount: 1 });
  const [isWitnessed, setIsWitnessed] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isInView) {
      setIsWitnessed(true);
    }
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div ref={headerRef} className="pt-32 text-7xl text-[#C9C4C4]">
        <SmallTextReveal textContent="SELECTED WORKS." />
      </div>
      <div className="pt-20 w-full text-[#9C9696] text-xl">
        <div
          ref={projectsRef}
          className="relative grid grid-cols-[1.5fr_1fr_1fr_0.5fr] w-full pb-4"
        >
          <p className="pl-6">Project</p>
          <p>Technologies</p>
          <p>Role</p>
          <p className="text-end pr-6">Year</p>
          <motion.span
            initial={{ width: "0px" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            animate={{ width: isWitnessed ? "100%" : "0px" }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9C4C4] scale-y-[1.25]"
          ></motion.span>
        </div>

        <div className="flex flex-col space-y-4 pt-4">
          <div className="relative grid grid-cols-[1.5fr_1fr_1fr_0.5fr] w-full pt-6 text-[#C9C4C4] pb-10 items-center">
            <div className="text-6xl pl-6">Keep Moving</div>
            <div>React - MySQL</div>
            <div>Development/Design</div>
            <div className="text-end pr-6">2023</div>
            <motion.span
              initial={{ width: "0px" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true, margin: "-800px 0px 0px 0px" }}
              animate={{ width: isWitnessed ? "100%" : "0px" }}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9C4C4]"
            ></motion.span>
          </div>
          <div className="relative grid grid-cols-[1.5fr_1fr_1fr_0.5fr] w-full pt-6 text-[#C9C4C4] pb-10 items-center">
            <div className="text-6xl pl-6">Curology</div>
            <div>Next - Framer Motion</div>
            <div>Development/Design</div>
            <div className="text-end pr-6">2023</div>
            <motion.span
              initial={{ width: "0px" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
              animate={{ width: isWitnessed ? "100%" : "0px" }}
              viewport={{ once: true, margin: "-500px 0px 0px 0px" }}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9C4C4]"
            ></motion.span>{" "}
          </div>
          <div className="relative grid grid-cols-[1.5fr_1fr_1fr_0.5fr] w-full pt-6 text-[#C9C4C4] pb-10 items-center">
            <div className="text-6xl pl-6">Dashboard</div>
            <div>Next - PostgreSQL</div>
            <div>Development/Design</div>
            <div className="text-end pr-6">2023</div>
            <motion.span
              initial={{ width: "0px" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: true, margin: "-500px 0px 0px 0px" }}
              animate={{ width: isWitnessed ? "100%" : "0px" }}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9C4C4]"
            ></motion.span>{" "}
          </div>
          <div className="relative grid grid-cols-[1.5fr_1fr_1fr_0.5fr] w-full pt-6 text-[#C9C4C4] pb-10 items-center">
            <div className="text-6xl pl-6">Portfolio</div>
            <div>React - MySQL</div>
            <div>Development/Design</div>
            <div className="text-end pr-6">2023</div>
            <motion.span
              initial={{ width: "0px" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
              animate={{ width: isWitnessed ? "100%" : "0px" }}
              viewport={{ once: true, margin: "-500px 0px 0px 0px" }}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9C4C4]"
            ></motion.span>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectList;
