import React from "react";
import { motion, useInView } from "framer-motion";
import SmallTextReveal from "../animations/SmallAboutReveal";

const projectList = [
  // {
  //   title: "Curology",
  //   tech: "Next - Framer Motion",
  //   role: "Development/Design",
  //   year: "2024",
  // },
  {
    title: "Dashboard",
    tech: "Next - Framer Motion - PostgreSQL",
    role: "Development/Design",
    year: "2024",
  },
  {
    title: "Keep Moving",
    tech: "React - MySQL",
    role: "Development/Design",
    year: "2023",
  },

  {
    title: "Lights out",
    tech: "Next - Puppeteer - MongoDB",
    role: "Development/Design",
    year: "2023",
  },
];

const borderAnimVariants = {
  hidden: {
    width: "0px",
  },
  visible: {
    width: "100%",
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

function ProjectList() {
  const headerRef = React.useRef<HTMLHeadingElement>(null);
  const projectsRef = React.useRef<HTMLHeadingElement>(null);

  const mobileProjectsRef = React.useRef<HTMLDivElement>(null);
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
      <div className="hidden md:block">
        <div ref={headerRef} className="pt-32 text-8xl text-[#C9C4C4]">
          <SmallTextReveal textContent="SELECTED WORKS ." />
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
              variants={borderAnimVariants}
              initial={"hidden"}
              animate={isWitnessed ? "visible" : "hidden"}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9C4C4] scale-y-[1.25]"
            ></motion.span>
          </div>
          <div className="flex flex-col space-y-4 pt-4">
            <MappedProjects isWitnessed={isWitnessed} />
          </div>
        </div>
      </div>
      {/* mobile here */}

      <div className="block md:hidden">
        <div
          ref={headerRef}
          className="block md:hidden pt-6 text-3xl text-cent text-[#C9C4C4]"
        >
          <SmallTextReveal textContent="SELECTED WORKS." />
        </div>
        <div className="pt-20 w-full text-[#9C9696] text-xl">
          <div
            ref={mobileProjectsRef}
            className="text-sm relative grid grid-cols-[1.5fr_1fr_1fr_0.5fr] w-full pb-4"
          >
            <p className="pl-1">Project</p>
            <p>Technologies</p>
            <p>Role</p>
            <p className="text-end pr-6">Year</p>
            <motion.span
              variants={borderAnimVariants}
              initial={"hidden"}
              animate={isWitnessed ? "visible" : "hidden"}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9C4C4] scale-y-[1.25]"
            ></motion.span>
          </div>
          <div className="flex flex-col space-y-4 pt-4">
            <MappedProjects isWitnessed={isWitnessed} />
          </div>
        </div>
      </div>
    </>
  );
}

function MappedProjects({ isWitnessed }: { isWitnessed: boolean }) {
  return (
    <>
      <div className="hidden md:flex flex-col space-y-4">
        {projectList.map(({ title, tech, role, year }) => {
          return (
            <div
              key={title}
              className="text-sm relative grid grid-cols-[1.5fr_1fr_1fr_0.5fr] w-full pt-6 text-[#C9C4C4] pb-10 items-center"
            >
              <div className="text-7xl pl-6">{title}</div>
              <div className="text-lg">{tech}</div>
              <div className="text-lg">{role}</div>
              <div className="text-lg text-end pr-6">{year}</div>
              <motion.span
                variants={borderAnimVariants}
                initial="hidden"
                animate={isWitnessed ? "visible" : "hidden"}
                viewport={{ once: true, margin: "-800px 0px 0px 0px" }}
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9C4C4]"
              ></motion.span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectList;
