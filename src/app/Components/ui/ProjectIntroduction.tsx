import React from "react";
import Image from "next/image";
import fixedImage from "@/app/Assets/fixedcover.jpg";
import { compacta } from "@/app/helpers/fonts";
import ProjectMiniDetails from "./ProjectMiniDetails";

function ProjectIntroduction({
  header,
  firstParagraph,
  secondParagraph,
}: {
  header: string;
  firstParagraph: string;
  secondParagraph: string;
}) {
  return (
    <>
      <h3 className="font-medium text-xl text-[#2c2b2b] ">{header}</h3>
      <span className="text-[#4F4848] text-base leading-[1.6] pt-6">
        {firstParagraph}
      </span>
      <p className="text-[#4F4848] text-base leading-[1.65] pt-6">
        {secondParagraph}
      </p>
    </>
  );
}

export default ProjectIntroduction;
