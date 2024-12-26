import React from "react";
import RevealBackgroundButton from "../animations/RevealBackgroundButton";
import Image from "next/image";

import { TransitionLink } from "@/app/helpers/TransitionLink";
import { projectItem } from "@/app/Types/Types";

function ProjectList({
  projects,
  handleSetIsExiting,
}: {
  projects: projectItem[];
  handleSetIsExiting: () => void;
}) {
  return (
    <>
      {projects.map(
        ({ name, projectImage, alt, description, deployLink, caseStudy }) => (
          <article
            key={name}
            className="flex xl:flex-nowrap mobilesm:flex-wrap 
            mobilexl:px-1
            xl:gap-12 lg:gap-8 md:gap-8 mobilemd:gap-6 mobilesm:gap-3"
          >
            <figure
              className="aspect-video relative 
              desktop:w-[900px] 
              xl:h-[700px] xl:w-[650px] 
              lg:w-full md:w-full 
             mobilesm:w-full
             mobilemd:h-[400px] mobilesm:h-[300px]
              flex-grow
               md:mx-0"
            >
              <Image
                className="w-full h-full object-cover rounded-[4px]"
                src={projectImage}
                alt={alt}
                fill
              />
            </figure>
            <section className="text-[#fff7f7] w-full flex flex-col">
              <h2
                className="desktop:text-[5.5rem] xl:text-[4.5vw] lg:text-[4.5vw]
              md:text-[3.4rem] mobilemd:text-[3rem] mobilesm:text-3xl
              font-medium 
              md:leading-none xl:ml-[-4px] md:ml-[-2px]
              desktop:pb-10 xl:pb-8 lg:pb-6 md:pb-6 mobilemd:pb-5 mobilesm:pb-3"
              >
                {name}
              </h2>
              <p
                className="w-full text-[#a09e9e] desktop:leading-[1.65] xl:leading-[1.6] 
              tracking-wide md:font-light mobilesm:font-normal
              opacity-90
              desktop:text-xl xl:text-lg md:text-base mobilemd:text-lg mobilesm:text-[0.95rem] text-pretty"
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
                <div className="flex gap-12 mobilexl:gap-7 mobilemd:gap-6 mobilesm:gap-4 desktop:text-2xl xl:text-base lg:pt-4 lg:pb-8">
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
                    <TransitionLink href={caseStudy}>CASE STUDY</TransitionLink>
                  </RevealBackgroundButton>
                </div>
              </div>
            </section>
          </article>
        )
      )}
    </>
  );
}

export default ProjectList;
