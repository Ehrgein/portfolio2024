"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ColorPalette from "../Components/ui/ColorPalette";
import { compacta } from "../helpers/fonts";
import { lato } from "../helpers/fonts";
import Typography from "../Components/ui/Typography";
import { fontData } from "../Types/Types";
import { useParams } from "next/navigation";
import image9 from "../Assets/image 9.png";
import CustomTagTextReveal from "../Components/animations/CustomTagTextReveal";
import ProductDescription from "../Components/ui/ProductDescription";
import ProblemSolution from "../Components/ui/ProblemSolution";
import { projectData } from "../helpers/projectsinfo";
import NextProjectOverlay from "../Components/ui/NextProjectOverlay";

const TypographyLato: fontData[] = [
  {
    weight: "",
    fontName: "Lato Regular",
  },
  {
    weight: "font-medium",
    fontName: "Lato Medium",
  },
  {
    weight: "font-bold",
    fontName: "Lato Bold",
  },
];

function Project() {
  const container = React.useRef<HTMLDivElement>(null);

  const { project } = useParams();

  // const images = [fixedImage, coccoil, atellier];

  // const from = searchParams.get("from");

  // const [scope] = useAnimate();

  // Get the active index from the route parameter, fallback to 0 if invalid

  const projectNumber = Number(project);

  // Gets the current project
  const projectDescription = projectData[projectNumber - 1];

  // Gets the next project
  const nextProjectIndex = (projectNumber % projectData.length) + 1;
  const nextProject = projectData[projectNumber % projectData.length];
  console.log(nextProject, "next project");

  // Unsure if its needed so far
  const nextProjectImage = nextProject?.imagesrc;
  const firstWord = nextProject?.firstword;
  const secondWord = nextProject?.secondword;

  return (
    <>
      <div className="relative bg-[#161616] pb-12">
        <motion.div
          initial={{ height: "100vh" }}
          animate={{ height: "80vh" }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.23, 1, 0.32, 1],
          }}
          ref={container}
          className="relative flex items-start justify-center h-screen overflow-hidden"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <motion.div className="relative w-full h-full">
            <Image
              src={projectDescription.imagesrc}
              fill
              alt="image"
              style={{ objectFit: "cover" }}
            />
            {/* <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div> */}

            <motion.div
              className="w-[75vw] h-[80vh] absolute top-2/4 left-2/4
            -translate-x-2/4 -translate-y-2/4 pointer-events-none flex flex-col"
            >
              <motion.h2
                className={`text-white text-[10rem] ${compacta.className} back leading-none invisible`}
              >
                _
              </motion.h2>
              <motion.h4
                transition={{ ease: "easeInOut", duration: 1 }}
                className={`text-white text-[10rem] ${compacta.className} back leading-none uppercase`}
              >
                {projectDescription.title}
              </motion.h4>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="text-white w-full px-60 relative">
          <ProductDescription projectData={projectDescription} />
          <div className="w-full pb-16 h-[1000px]">
            <Image
              src={image9}
              className="w-full h-full object-contain"
              alt="hi"
            />
          </div>
          <ProblemSolution
            title="Problem"
            titleDescription={projectDescription?.problem}
          />
          <ProblemSolution
            title="Solution"
            titleDescription={projectDescription?.solution}
          />
          <div className="w-full pb-16 h-[1000px]">
            <Image
              src={image9}
              className="w-full h-full object-contain"
              alt="hi"
            />
          </div>
          <Typography
            mainParagraph="Lato was selected for this project due to its clean, modern feel,
          which aligns well with the streetwear focus of the e-commerce site.
          Its sleek design enhances the visual appeal while resonating with the
          target audience, offering a polished yet contemporary look that
          complements the brand’s identity."
            // fontText={["Lato Regular", "Lato Medium", "Lato Bold"]}
            fontClassname={lato.className}
            fontText={TypographyLato}
          />
          <div className="pt-32 pb-20 flex flex-col gap-6">
            <CustomTagTextReveal
              delayIndex={0.2}
              textSize={
                "desktop:text-[1.5rem] xl:text-[1.7rem] lg:text-[1.55rem] md:text-[1.45rem] mobilemd:text-[1.25rem] mobilesm:text-[1.3rem]"
              }
              textColor="text-white"
              leading={"leading-[1.5]"}
              fontWeight="font-normal"
              textContent="Color Palette"
            />
            <CustomTagTextReveal
              delayIndex={0.2}
              textSize={
                "desktop:text-[1.25rem] xl:text-[1.7rem] lg:text-[1.55rem] md:text-[1.45rem] mobilemd:text-[1.25rem] mobilesm:text-[1.3rem]"
              }
              textColor="text-[#b5b0b0]"
              leading={"leading-[1.5]"}
              fontWeight="font-normal"
              textContent="The brand is known for its simple black and white aesthetic, with orange accent colors."
            />
          </div>
          <ColorPalette />
          <div className="w-full pb-16 pt-20 h-[1000px]">
            <Image
              src={image9}
              className="w-full h-full object-contain"
              alt="hi"
            />
          </div>
        </div>
      </div>
      {/* <div className="bg-[#212F29] h-screen items-center justify-center relative">
        <div className="w-full h-full top-0 items-center flex justify-center absolute">
          <div className="w-[40vw] h-[65vh] absolute z-[10]">
            <h2
              className={`text-white  absolute top-[10%] left-[-15%] text-[10rem] ${compacta.className} back`}
            >
              KEEP
            </h2>
            <h2
              className={`text-white  absolute bottom-[10%] right-[-15%] text-[10rem] ${compacta.className} back`}
            >
              MOVING
            </h2>
          </div>
          <motion.div
            variants={bannerVariants}
            initial={{
              width: "40vw",
              height: "65vh",
            }}
            className="overflow-hidden relative z-[20]"
            animate={isAnimated ? "animate" : "hidden"}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Image
              src={nextProject?.imagesrc}
              onClick={handleNext}
              alt=""
              className="w-full h-full object-cover relative"
            />
            <h2
              className={`text-[#212F29]  absolute top-[10%] left-[-15%] text-[10rem] ${compacta.className} back`}
            >
              KEEP
            </h2>
            <h2
              className={`text-[#212F29]  absolute bottom-[10%] right-[-15%] text-[10rem] ${compacta.className} back`}
            >
              MOVING
            </h2>
          </motion.div>
        </div>
      </div> */}
      <NextProjectOverlay
        imagesrc={nextProjectImage}
        firstword={firstWord}
        secondword={secondWord}
        nextProjectIndex={nextProjectIndex}
      />
    </>
  );
}

export default Project;
