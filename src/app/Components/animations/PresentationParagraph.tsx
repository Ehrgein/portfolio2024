import React from "react";
import IntroHeaderReveal from "./IntroHeaderReveal";

function PresentationParagraph() {
  return (
    <section
      className="md:flex hidden 
    w-full h-full flex-col flex-grow items-center justify-center
    desktop:px-40 xl:px-32 lg:px-10 md:px-6 gap-1 
    desktop:pt-10 xl:pt-24 xl:pb-12 text-left
     text-pretty"
    >
      <div className="hidden md:block">
        <IntroHeaderReveal
          textSize={
            "desktop:text-[4.8rem] 2xl:text-[3.8rem] xl:text-[3.5rem] lg:text-[2.6rem] md:text-[2.5rem] mobilemd:text-[2.5rem]"
          }
          textColor="text-[#161616]"
          leading={"leading-[1.25]"}
          textContent="Frontend developer based in Buenos Aires who loves bringing ideas into visually appealing, intuitive to use interfaces that enhance user experience. Obsessed with ux/ui and 3D."
        />
      </div>
    </section>
  );
}

export default PresentationParagraph;
