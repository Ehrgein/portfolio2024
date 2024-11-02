import React from "react";
import red from "../../Assets/redimage.jpg";
import { compacta } from "@/app/helpers/fonts";
import Image from "next/image";
import ImageReveal from "../animations/ImageReveal";
import coccoil from "../../Assets/cocooil.jpg";
import Typography from "./Typography";
import ColorPalette from "./ColorPalette";
import { fontData } from "@/app/Types/Types";
import { lato } from "@/app/helpers/fonts";

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
  return (
    <div className="w-full h-full flex relative">
      <div className="w-2/5 h-screen relative pr-12">
        <Image
          src={red}
          alt="restaurant"
          className="h-full w-[40%] object-cover fixed top-0 left-0"
        />
      </div>
      <div className="w-3/5 p-14 pt-18 py-8">
        <h1
          className={`${compacta.className} text-[#161616] opacity-95 text-6xl tracking-wide`}
        >
          CUROLOGY
        </h1>
        <span className="text-[#484040] text-lg">
          Personalized skincare service
        </span>
        <div className="flex flex-col gap-6 pt-8 w-full pr-2">
          <span className="text-[#4F4848] text-">
            In 2023, I built an eCommerce platform using React, focusing on
            performance and user experience. I implemented product search,
            filtering, user authentication, and payment integration with
            responsive design for all devices.
          </span>
          <p className="text-[#4F4848] text-base">
            The platform utilized React hooks and context for state management,
            along with API integration for dynamic product data and order
            processing. I optimized performance using lazy loading and other
            techniques to ensure fast load times.
          </p>
        </div>
        <div className="pt-10 pr-2">
          {/* <Image
          src={coccoil}
          alt="restaurant"
          className="w-full h-[600px] object-cover"
        /> */}
          <ImageReveal height="500px" src={coccoil} alt="s" />
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
      </div>
    </div>
  );
}

export default FixedProject;
