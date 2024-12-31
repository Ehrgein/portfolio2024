import React from "react";
import { Typographyprops } from "../../Types/Types";

function Typography({
  mainParagraph,
  fontText,
  fontClassname,
}: Typographyprops) {
  return (
    <>
      <div className="space-y-6">
        <h3 className="text-2xl">Typography</h3>
        <p className="text-[1.25rem] w-ful leading-[1.75] text-[#B5B0B0]">
          {mainParagraph}
        </p>
      </div>
      <div className="flex justify-center items-center pt-16">
        <div
          className={`grid grid-cols-3 place-content-center gap-12 lg:gap-40 ${fontClassname}`}
        >
          {fontText.map(({ weight, fontName }) => (
            <div key={fontName} className={`flex flex-col gap-2`}>
              <span className={`text-4xl ${weight}`}>Aa</span>
              <span className="text-3xl text-[#575757]">{fontName}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Typography;
