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
import { useParams, useRouter } from "next/navigation";
import SwitchProject from "../transitions/SwitchProject";
import IntroHeaderReveal from "../animations/IntroHeaderReveal";

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
  const params = useParams();
  const [isSwitchingProjects, setIsSwitchingProjects] =
    React.useState<boolean>(false);

  const images = [fixedImage, coccoil, atellier];

  const router = useRouter();

  const [scope, animate] = useAnimate(); // `scope` is used to control animations on the div
  console.log(animate);
  // Get the active index from the route parameter, fallback to 0 if invalid

  const projectNumber = Number(params.project);

  const currentIndex =
    !isNaN(projectNumber) && projectNumber > 0
      ? (projectNumber - 1) % images.length // Wrap around using modulus
      : 0;

  const nextIndex = (currentIndex + 1) % images.length; // Determine the next image index

  // Only include the current and next images
  const visibleImages = [
    { src: images[currentIndex], position: "current" },
    { src: images[nextIndex], position: "next" },
  ];

  const handleNext = async () => {
    // await animate(
    //   "#project-content",
    //   {
    //     y: "-100%",
    //   },
    //   {
    //     ease: "easeInOut",
    //     duration: 0.6,
    //   }
    // );

    setIsSwitchingProjects(true);
    setTimeout(() => {
      const nextProject = (projectNumber % images.length) + 1; // Cycle to the next project
      router.push(`/${nextProject}`);
    }, 1000);
  };

  React.useEffect(() => {});

  return (
    <>
      {isSwitchingProjects && <SwitchProject />}
      <div>
        <motion.div ref={scope} className="w-full h-screen flex relative">
          <motion.div className="w-2/5  h-screen pr-12">
            <motion.div
              initial={{
                clipPath: "inset(100% 0% 0% 0%)",
              }}
              animate={{ clipPath: "inset(0% 0% 0% 0%" }}
              transition={{
                duration: 2,
                ease: [0.19, 1, 0.22, 1],
              }}
              id="project-content"
              className="fixed top-0 left-0 h-full w-full  pointer-events-none"
            >
              {visibleImages.map(({ src, position }, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Image ${index}`}
                  className={`h-full w-[40%] object-cover ${
                    position === "current" ? "z-10" : "z-0"
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col w-3/5 pt-12 pl-16 pr-16 h-full text-6 ">
            {/* <div className="w-full h-full">
              <motion.h1
                initial={{ y: "100%" }}
                onClick={handleNext}
                className={`${compacta.className} text-[#161616] opacity-95 text-6xl tracking-wide`}
              >
                KEEP MOVING
              </motion.h1>
            </div> */}
            {/* <motion.p exit={{ scale: 1.5 }} className="text-[#484040] text-md">
              Discover bold, urban high fashion with cutting-edge designs and
              premium streetwear style.
            </motion.p> */}
            <button onClick={handleNext}>CLICK ME</button>
            <IntroHeaderReveal
              textSize={
                "desktop:text-6xl 2xl:text-[3.8rem] xl:text-[3.5rem] lg:text-[2.6rem] md:text-[2.5rem] mobilemd:text-[2.5rem]"
              }
              textColor="text-[#161616]"
              leading={"leading-[1.25]"}
              textContent="KEEP MOVING"
              fontFamily="compacta"
            />

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
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default FixedProject;
