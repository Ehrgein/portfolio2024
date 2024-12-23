import React from "react";

function LetsTalk({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:pt-56 md:pt-52 px-24 mobilemd:px-4 space-y-4">
      <h3 className="text-[#161616] font-medium desktop:text-[12vw] mobilemd:text-[7rem] ml-[-8px] text-center leading-none">
        LET&apos;S TALK!
      </h3>
      <p className="text-[#514F4F] desktop:text-2xl mobilemd:text-xl lg:text-xl py-3 text-center">
        {children}
      </p>
    </div>
  );
}

export default LetsTalk;
