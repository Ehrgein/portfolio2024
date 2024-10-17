import React from "react";
import { lato } from "../helpers/fonts";

function Typography() {
  return (
    <>
      <div className="space-y-6 pt-6">
        <h3 className="font-medium text-2xl">Typography</h3>
        <p className="text-lg">
          Lato was selected for this project due to its clean, modern feel,
          which aligns well with the streetwear focus of the e-commerce site.
          Its sleek design enhances the visual appeal while resonating with the
          target audience, offering a polished yet contemporary look that
          complements the brand’s identity.
        </p>
      </div>
      <div className="flex justify-center items-center pt-12">
        <div
          className={`grid grid-cols-3 place-content-center gap-12 lg:gap-40 ${lato.className}`}
        >
          <div className={`flex flex-col`}>
            <span className="text-4xl">Aa</span>
            <span className="text-2xl text-[#575757] t">Lato Regular</span>
          </div>
          <div className={`flex flex-col`}>
            <span className="text-4xl font-medium">Aa</span>
            <span className="text-2xl text-[#575757] ">Lato Medium</span>
          </div>
          <div className={`flex flex-col`}>
            <span className="text-4xl font-bold">Aa</span>
            <span className="text-2xl text-[#575757] ">Lato Bold</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Typography;
