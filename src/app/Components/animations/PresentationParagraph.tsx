import React from "react";
import ParagraphReveal from "./ParagraphReveal";

function PresentationParagraph() {
  return (
    <section className="px-40 pt-12 flex flex-col flex-grow items-center justify-center gap-1 w-full h-full">
      <div className="overflow-hidden">
        {/* <ParagraphReveal
          textSize={"text-[85px]"}
          textColor="text-[#161616]"
          leading={"leading-loose"}
        >
          Frontend developer based in Buenos Aires who loves bringing
          <strong> ideas</strong> into visually appealing, intuitive to use
          interfaces that enhance user experience. Obsessed with{" "}
          <strong>ux/ui </strong>and<strong> 3D</strong>
          <span className={`${compacta.className}`}>.</span>
        </ParagraphReveal> */}
        <ParagraphReveal
          textSize={"desktop:text-[75px] 2xl:text-[60px]"}
          textColor="text-[#161616]"
          leading={"leading-loose"}
          textContent="Frontend developer based in Buenos Aires who loves bringing ideas into visually appealing, intuitive to use interfaces that enhance user experience. Obsessed with ux/ui and 3D."
        />
      </div>
    </section>
  );
}

export default PresentationParagraph;
