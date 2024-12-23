import React from "react";
import pinkcurology from "../../Assets/pinkcrlg.jpg";
import restaurant from "../../Assets/restaurant.jpg";
import redimage from "../../Assets/redimage.jpg";
import Image from "next/image";
import atellier from "../../Assets/atellier.jpg";
import { TransitionLink } from "@/app/helpers/TransitionLink";
import ExitTransition from "../transitions/ExitTransition";
import RevealBackgroundButton from "../animations/RevealBackgroundButton";

function ProjectsLayout({
  isExiting,
  setIsExiting,
}: {
  isExiting: boolean;
  setIsExiting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const projects = [
    {
      name: "Keep Moving",
      projectImage: pinkcurology,
      description:
        "Urban-style e-commerce platform, showcasing modern fashion and lifestyle products with a seamless user experience. Made with React, Tailwind, MySQL .",
      deployLink: "https://keepmovingclothing.vercel.app/",
      caseStudy: "/1",
      alt: "Woman wearing sneakers representing urban fashion",
    },
    {
      name: "Sansei",
      projectImage: restaurant,
      description:
        "Landing page for local Japanese owned restaurant which includes a booking/reserve system. Made with React, Tailwind, MySQL .",
      deployLink: "https://keepmovingclothing.vercel.app/",
      caseStudy: "/1",
      alt: "Woman wearing sneakers representing urban fashion",
    },
    {
      name: "Curology",
      projectImage: redimage,
      description:
        "Beauty products with a clean and minimal UI, focused on seamless transitions. Made with React, Tailwind, MySQL .",
      deployLink: "https://keepmovingclothing.vercel.app/",
      caseStudy: "/2",
      alt: "Woman wearing sneakers representing urban fashion",
    },
    {
      name: "Lotus",
      projectImage: atellier,
      description:
        "Medical dashboard created with the goal of helping low income communities manage their patients. Made with React, Tailwind, PostgreSQL .",
      deployLink: "https://keepmovingclothing.vercel.app/",
      caseStudy: "/1",
      alt: "Woman wearing sneakers representing urban fashion",
    },
    {
      name: "Lights Out",
      projectImage: pinkcurology,
      description:
        "Project made with the purpose of tracking outages in the Buenos Aires area, scraping data from the national provider. Made with Next, Puppeteer, Tailwind, MongoDB .",
      deployLink: "https://keepmovingclothing.vercel.app/",
      caseStudy: "/1",
      alt: "Woman wearing sneakers representing urban fashion",
    },
  ];

  const handleSetIsExiting = () => {
    setIsExiting(true);
  };

  return (
    <>
      <div className="text-[#D1CEC6] pb-12 font-medium">
        <h3
          className="desktop:text-[8rem] xl:text-[6rem] lg:text-[8vw] md:text-[4rem] mobilesm:text-6xl
        mobilemd:text-[4rem] mobilemd:leading-[1.1] mobilesm:leading-tight
        ml-[-0.5vw] 
        desktop:pb-24 xl:pb-24 lg:pb-12 md:pb-8 mobilemd:pb-10 mobilesm:pb-7"
        >
          SELECTED WORKS.
        </h3>
        <div className="flex flex-col gap-10 md:gap-16">
          {projects.map(
            ({
              name,
              projectImage,
              alt,
              description,
              deployLink,
              caseStudy,
            }) => (
              <article
                key={name}
                className="flex xl:flex-nowrap mobilesm:flex-wrap 
                xl:gap-12 lg:gap-8 md:gap-8 mobilemd:gap-6 mobilesm:gap-3"
              >
                <figure
                  className="aspect-video 
                  desktop:w-[900px] 
                  xl:h-[700px] xl:w-[650px] 
                  lg:w-full md:w-full mobilemd:w-full mobilemd:h-[400px] 
                  mobilesm:w-[300px] mobilesm:h-[300px]
                  relative md:mx-0 mobilesm:mx-auto"
                >
                  <Image
                    className="w-full h-full object-cover rounded-[4px]"
                    src={projectImage}
                    alt={alt}
                    fill
                    // sizes="
                    // (max-width: 1200px) 600px,
                    // (max-width: 1440px) 600px,
                    //  "
                  />
                </figure>
                <section className="text-[#fff7f7] w-full flex flex-col">
                  <h2
                    className="desktop:text-[5.5rem] xl:text-[4.5vw] lg:text-[4.5vw]
                    md:text-[3.4rem] mobilemd:text-[3rem] mobilesm:text-4xl
                  font-medium 
                  md:leading-none xl:ml-[-4px] md:ml-[-2px]
                  desktop:pb-10 xl:pb-8 lg:pb-6 md:pb-6 mobilemd:pb-3 mobilesm:pb-2"
                  >
                    {name}
                  </h2>
                  <p
                    className="w-full text-[#a09e9e] desktop:leading-[1.65] xl:leading-[1.6] 
                  tracking-wide font-light
                  desktop:text-xl xl:text-lg md:text-base mobilemd:text-lg mobilesm:text-base text-pretty"
                  >
                    {description}
                  </p>
                  <div
                    className="w-full mobile bg-[#535151] h-[1px]
                    desktop:mt-8 desktop:mb-4 xl:mt-6 xl:mb-2 lg:mt-8 lg:mb-2 md:mt-5 md:mb-5
                    mobilemd:mb-4 mobilemd:mt-5 mobilesm:mb-4 mobilesm:mt-5
                  "
                  ></div>
                  <div className="flex items-center justify-between">
                    {/* <aside className="flex-col gap-1 text-sm desktop:flex mobilemd:hidden">
                      <div>
                        <span className="uppercase">Development</span>
                      </div>
                      <div>
                        <span className="uppercase">Design</span>
                      </div>
                    </aside> */}
                    <div className="flex gap-12 desktop:text-2xl xl:text-base lg:pt-4 lg:pb-8">
                      <RevealBackgroundButton
                        handleSetIsExiting={handleSetIsExiting}
                      >
                        <TransitionLink href={deployLink}>
                          VIEW WEBSITE
                        </TransitionLink>
                      </RevealBackgroundButton>
                      <RevealBackgroundButton
                        handleSetIsExiting={handleSetIsExiting}
                      >
                        <TransitionLink href={caseStudy}>
                          CASE STUDY
                        </TransitionLink>
                      </RevealBackgroundButton>
                    </div>
                  </div>
                </section>
              </article>
            )
          )}
        </div>
      </div>
      {isExiting && <ExitTransition />}
    </>
  );
}

export default ProjectsLayout;
