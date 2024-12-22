import React from "react";

type FooterHeaderType = {
  header: string;
  paragraph: string;
};

function FooterHeader({ header, paragraph }: FooterHeaderType) {
  return (
    <div className="pt-20 px-24 space-y-4">
      <h3 className="text-[#161616] font-medium text-7xl ml-[-8px]">
        {header}
      </h3>
      <p className="text-[#161616] opacity-90 text-2xl py-3">{paragraph}</p>
    </div>
  );
}

export default FooterHeader;
