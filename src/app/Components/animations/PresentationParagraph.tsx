import React from "react";
import IntroHeaderReveal from "./IntroHeaderReveal";

function PresentationParagraph() {
  return (
    <section
      className="
    w-full h-full flex flex-col flex-grow items-center justify-center
    desktop:px-32 xl:px-24 lg:px-16 md:px-6 gap-1 desktop:pb-20 xl:pb-12 text-pretty"
    >
      <div className="hidden md:block">
        <IntroHeaderReveal
          textSize={
            "desktop:text-[75px] 2xl:text-[60px] xl:text-[3.5rem] lg:text-[3rem] md:text-[2.5rem] mobilemd:text-[2.5rem]"
          }
          textColor="text-[#161616]"
          leading={"leading-loose"}
          textContent="Frontend developer based in Buenos Aires who loves bringing ideas into visually appealing, intuitive to use interfaces that enhance user experience. Obsessed with ux/ui and 3D."
        />
      </div>
      <div className="md:hidden block text-center">
        <IntroHeaderReveal
          textSize={
            "desktop:text-[75px] 2xl:text-[60px] xl:text-[3.5rem] lg:text-[3rem] md:text-[2.5rem] mobilemd:text-[2.6rem]"
          }
          textColor="text-[#161616]"
          leading={"leading-loose"}
          textContent="FRONTEND DEVELOPER"
        />
        <IntroHeaderReveal
          textSize={
            "desktop:text-[75px] 2xl:text-[60px] xl:text-[3.5rem] lg:text-[3rem] md:text-[2.5rem] mobilemd:text-[2.6rem]"
          }
          textColor="text-[#161616]"
          leading={"leading-loose"}
          textContent="Buenos Aires based."
        />
        <IntroHeaderReveal
          textSize={
            "desktop:text-[75px] 2xl:text-[60px] xl:text-[3.5rem] lg:text-[3rem] md:text-[2.5rem] mobilemd:text-[2.6rem]"
          }
          textColor="text-[#161616]"
          leading={"leading-loose"}
          textContent="Obsessed with UX/UI and 3D."
        />
      </div>
    </section>
  );
}

export default PresentationParagraph;
