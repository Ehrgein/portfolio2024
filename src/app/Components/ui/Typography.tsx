import React from "react";
import { Typographyprops } from "../../Types/Types";

function Typography({
  mainParagraph,
  fontText,
  fontClassname,
}: Typographyprops) {
  return (
    <>
      <div className="space-y-6 pt-6">
        <h3 className="font-medium text-2xl">Typography</h3>
        <p className="text-lg">{mainParagraph}</p>
      </div>
      <div className="flex justify-center items-center pt-12 pb-10">
        <div
          className={`grid grid-cols-3 place-content-center gap-12 lg:gap-40 ${fontClassname}`}
        >
          {fontText.map(({ weight, fontName }) => (
            <div className={`flex flex-col`}>
              <span className={`text-4xl ${weight}`}>Aa</span>
              <span className="text-2xl text-[#575757]">{fontName}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Typography;
