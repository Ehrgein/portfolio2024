import React from "react";
import ParagraphReveal from "./ParagraphReveal";
import FooterWhite from "../layout/FooterWhite";

function PresentationParagraph() {
  return (
    <section className="px-40 flex flex-col flex-grow items-center justify-center gap-1 w-full h-full pb-20">
      <ParagraphReveal
        textSize={"desktop:text-[75px] 2xl:text-[60px]"}
        textColor="text-[#161616]"
        leading={"leading-loose"}
        textContent="Frontend developer based in Buenos Aires who loves bringing ideas into visually appealing, intuitive to use interfaces that enhance user experience. Obsessed with ux/ui and 3D."
      />
    </section>
  );
}

export default PresentationParagraph;
