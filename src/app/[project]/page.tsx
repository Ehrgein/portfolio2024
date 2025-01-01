"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ColorPalette from "../Components/ui/ColorPalette";
import landscape from "@/app/Assets/landscapebackground.jpg";
import { compacta } from "../helpers/fonts";
import { lato } from "../helpers/fonts";
import Typography from "../Components/ui/Typography";
import { fontData } from "../Types/Types";
import { useParams, useRouter } from "next/navigation";
import coccoil from "@/app/Assets/cocooil.jpg";
import fixedImage from "@/app/Assets/fixedcover.jpg";
import atellier from "@/app/Assets/atellier.jpg";
import image9 from "../Assets/image 9.png";

import CustomTagTextReveal from "../Components/animations/CustomTagTextReveal";
import ProductDescription from "../Components/ui/ProductDescription";

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

const projectData = [
  {
    title: "Keep Moving",
    description:
      "Ecommerce brand dedicated to redefining streetwear fashion with a focus on designer urban clothing, they combine bold aesthetics and premium quality to create",
    technologies: [
      {
        title: "Year",
        value: "2024",
      },
      {
        title: "Role",
        value: "Design, Development",
      },
      {
        title: "Techonologies",
        value: "React, Mysql, Tailwind, Node JS",
      },
    ],
  },
  {
    title: "Curology",
    description: "Cosmetics brand!",
    technologies: [
      {
        title: "Year",
        value: "2025",
      },
      {
        title: "Role",
        value: "Design, Development",
      },
      {
        title: "Techonologies",
        value: "React, PostgresSQL, Tailwind, Node JS",
      },
    ],
  },
];

function Project() {
  const container = React.useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = React.useState(false);

  const bannerVariants = {
    hidden: {
      width: "40vw",
      height: "65vh",
    },
    animate: {
      width: "100vw",
      height: "100vh",
    },
  };

  const { project } = useParams();

  const images = [fixedImage, coccoil, atellier];

  // const from = searchParams.get("from");

  const router = useRouter();

  // const [scope] = useAnimate();

  // Get the active index from the route parameter, fallback to 0 if invalid

  const projectNumber = Number(project);

  const projectDescription = projectData[projectNumber - 1];
  console.log("hello");
  console.log(projectDescription);

  // Only include the current and next images

  const handleNext = async () => {
    setIsAnimated(true);
    setTimeout(() => {
      const nextProject = (projectNumber % images.length) + 1; // Cycle to the next project
      router.push(`/${nextProject}`);
    }, 1000);
  };

  return (
    <>
      <div className="relative bg-[#161616] pb-12">
        <div
          ref={container}
          className="relative flex items-center justify-center h-screen overflow-hidden"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <motion.div
            initial={{ y: "0vh" }}
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1], // Ease-in-out
            }}
            className="relative w-full h-full"
          >
            <Image
              src={landscape}
              fill
              alt="image"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
            <div>
              <h4
                className={`${compacta.className} w-[6ch] absolute bottom-0 p-4 left-0 text-9xl text-[#DFD9D9]`}
              >
                KEEP MOVING
              </h4>
            </div>
          </motion.div>
        </div>
        <div className="text-white w-full px-60 relative">
          <ProductDescription projectData={projectDescription} />
          <div className="w-full pb-16 h-[1000px]">
            <Image
              src={image9}
              className="w-full h-full object-contain"
              alt="hi"
            />
          </div>
          <div className="pb-20 flex flex-col gap-6">
            <CustomTagTextReveal
              delayIndex={0.2}
              textSize={
                "desktop:text-[1.5rem] xl:text-[1.7rem] lg:text-[1.55rem] md:text-[1.45rem] mobilemd:text-[1.25rem] mobilesm:text-[1.3rem]"
              }
              textColor="text-white"
              leading={"leading-[1.5]"}
              fontWeight="font-normal"
              textContent="Problem"
            />
            <CustomTagTextReveal
              delayIndex={0.2}
              textSize={
                "desktop:text-[1.25rem] xl:text-[1.7rem] lg:text-[1.55rem] md:text-[1.45rem] mobilemd:text-[1.25rem] mobilesm:text-[1.3rem]"
              }
              textColor="text-[#b5b0b0]"
              leading={"leading-[1.5]"}
              fontWeight="font-normal"
              textContent="Lato was selected for this project due to its clean, modern feel, which aligns well with the streetwear focus of the e-commerce site. Its sleek design enhances the visual appeal while resonating with the target audience, offering a polished yet contemporary look that complements the brand’s identity."
            />
          </div>
          <div className="py-20 flex flex-col gap-6">
            <CustomTagTextReveal
              delayIndex={0.2}
              textSize={
                "desktop:text-[1.5rem] xl:text-[1.7rem] lg:text-[1.55rem] md:text-[1.45rem] mobilemd:text-[1.25rem] mobilesm:text-[1.3rem]"
              }
              textColor="text-white"
              leading={"leading-[1.5]"}
              fontWeight="font-normal"
              textContent="Solution"
            />
            <CustomTagTextReveal
              delayIndex={0.2}
              textSize={
                "desktop:text-[1.25rem] xl:text-[1.7rem] lg:text-[1.55rem] md:text-[1.45rem] mobilemd:text-[1.25rem] mobilesm:text-[1.3rem]"
              }
              textColor="text-[#b5b0b0]"
              leading={"leading-[1.5]"}
              fontWeight="font-normal"
              textContent="Lato was selected for this project due to its clean, modern feel, which aligns well with the streetwear focus of the e-commerce site. Its sleek design enhances the visual appeal while resonating with the target audience, offering a polished yet contemporary look that complements the brand’s identity."
            />
          </div>
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
      <div className="bg-[#212F29] h-screen items-center justify-center relative">
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
              src={landscape}
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
      </div>
    </>
  );
}

export default Project;
