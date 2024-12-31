"use client";
import React from "react";
import Image from "next/image";
import coccoil from "../../Assets/cocooil.jpg";
import Typography from "./Typography";
import ColorPalette from "./ColorPalette";
import { fontData } from "@/app/Types/Types";
import { lato } from "@/app/helpers/fonts";
import fixedImage from "@/app/Assets/fixedcover.jpg";
import { motion, useAnimate } from "framer-motion";
import atellier from "@/app/Assets/atellier.jpg";
import ProjectIntroduction from "./ProjectIntroduction";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import SwitchProject from "../transitions/SwitchProject";
import IntroHeaderReveal from "../animations/IntroHeaderReveal";
import EnterAnimation from "../transitions/EnterAnimation";

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

function FixedProject() {
  const searchParams = useSearchParams();
  const { project } = useParams();
  const [isSwitchingProjects, setIsSwitchingProjects] =
    React.useState<boolean>(false);

  const images = [fixedImage, coccoil, atellier];

  const from = searchParams.get("from");

  const router = useRouter();

  const [scope] = useAnimate(); // `scope` is used to control animations on the div

  // Get the active index from the route parameter, fallback to 0 if invalid

  const projectNumber = Number(project);

  // Only include the current and next images

  const handleNext = async () => {
    setIsSwitchingProjects(true);
    setTimeout(() => {
      const nextProject = (projectNumber % images.length) + 1; // Cycle to the next project
      router.push(`/${nextProject}`);
    }, 2000);
  };

  return (
    <>
      {from === "home" && <EnterAnimation />}
      {isSwitchingProjects && <SwitchProject />}
      <div>
        <motion.div
          ref={scope}
          className="w-full h-full
         flex relative"
        >
          <motion.div className="w-2/5 sticky top-0 left-0 h-screen pr-12">
            <motion.div
              initial={{
                clipPath: "inset(100% 0% 0% 0%)",
              }}
              animate={{ clipPath: "inset(0% 0% 0% 0%" }}
              transition={{
                duration: 2,
                ease: [0.19, 1, 0.22, 1],
                delay: from === "home" ? 1.4 : 0,
              }}
              id="project-content"
              className="h-full w-full  pointer-events-none"
            >
              <Image
                src={images[projectNumber - 1]}
                alt=""
                className={`h-full w-[100%] object-cover`}
              />
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col w-3/5 pt-12 pl-16 pr-16 h-full text-6 ">
            <IntroHeaderReveal
              textSize={
                "desktop:text-6xl 2xl:text-[3.8rem] xl:text-[3.5rem] lg:text-[2.6rem] md:text-[2.5rem] mobilemd:text-[2.5rem]"
              }
              textColor="text-[#161616]"
              leading={"leading-[1.25]"}
              textContent="KEEP MOVING"
              fontFamily="compacta"
            />
            <motion.p exit={{ scale: 1.5 }} className="text-[#484040] text-md">
              Discover bold, urban high fashion with cutting-edge designs and
              premium streetwear style.
            </motion.p>

            <button onClick={handleNext}>CLICK ME</button>

            <div className="flex flex-col pt-16 w-full pr-10">
              <ProjectIntroduction
                header="Description"
                firstParagraph="Keep moving is an ecommerce brand dedicated to redefining streetwear
            fashion. With a focus on designer urban clothing, they combine bold
            aesthetics and premium quality to create styles that resonate with
            individuality and self-expression. Tailored for trendsetters, Keep
            Moving offers a seamless shopping experience for those who dare to
            stand out."
                secondParagraph="Keep Moving struggled with delivering a seamless online experience that reflected their bold identity. 
              Their platform faced slow performance and limited scalability, making it hard to engage their trendsetting audience. Managing updates and inventory was inefficient, holding them back from staying ahead in fashion."
              />
            </div>
            <div className="flex flex-col pt-12 w-full pr-10">
              <ProjectIntroduction
                header="Solution"
                firstParagraph="Keep moving is an ecommerce brand dedicated to redefining streetwear
            fashion. With a focus on designer urban clothing, they combine bold
            aesthetics and premium quality to create styles that resonate with
            individuality and self-expression. Tailored for trendsetters, Keep
            Moving offers a seamless shopping experience for those who dare to
            stand out."
                secondParagraph="Keep moving is an ecommerce brand dedicated to redefining streetwear
            fashion. With a focus on designer urban clothing, we combine bold
            aesthetics and premium quality to create styles that resonate with
            individuality and self-expression. Tailored for trendsetters, Keep
            Moving offers a seamless shopping experience for those who dare to
            stand out."
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
            <ColorPalette />
            {/* <ProjectMiniDetails /> */}
            <div className="pb-40"></div>
          </motion.div>
        </motion.div>
        {/* <motion.div
          initial={{ backgroundColor: "#DFD9D9" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          whileInView={{ backgroundColor: "#121212" }}
          className="h-[80vh] w-full flex flex-col items-center justify-center text-6xl"
        >
          <div className="text-[#ede9de] pt-20 pb-20 flex-col flex items-center">
            <h3 className="text-xl uppercase tracking-widest pb-8">
              Next project
            </h3>
            <h1
              onClick={handleNext}
              className={`text-[10rem] tracking-widest ${compacta.className} text-[#ede9de]`}
            >
              LOTUS
            </h1>
          </div>
        </motion.div> */}
      </div>
    </>
  );
}

export default FixedProject;
