import React from "react";
import IntroHeaderReveal from "./IntroHeaderReveal";

function PresentationParagraph() {
  return (
    <section className="px-40 desktop:px-32 xl:px-24 flex flex-col flex-grow items-center justify-center gap-1 w-full h-full desktop:pb-20 xl:pb-12">
      <IntroHeaderReveal
        textSize={"desktop:text-[75px] 2xl:text-[60px] xl:text-[58px]"}
        textColor="text-[#161616]"
        leading={"leading-loose"}
        textContent="Frontend developer based in Buenos Aires who loves bringing ideas into visually appealing, intuitive to use interfaces that enhance user experience. Obsessed with ux/ui and 3D."
      />
    </section>
  );
}

export default PresentationParagraph;
