import React from "react";
import IntroHeaderReveal from "./IntroHeaderReveal";

function PresentationParagraph() {
  return (
    <section
      className="
    w-full h-full flex flex-col flex-grow items-center justify-center
    desktop:px-32 xl:px-24 lg:px-16 md:px-6 gap-1 desktop:pb-20 xl:pb-12 text-pretty"
    >
      <IntroHeaderReveal
        textSize={
          "desktop:text-[75px] 2xl:text-[60px] xl:text-[58px] lg:text-[4.8vw] md:text-3xl"
        }
        textColor="text-[#161616]"
        leading={"leading-loose"}
        textContent="Frontend developer based in Buenos Aires who loves bringing ideas into visually appealing, intuitive to use interfaces that enhance user experience. Obsessed with ux/ui and 3D."
      />
    </section>
  );
}

export default PresentationParagraph;
