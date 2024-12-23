import React from "react";

function LetsTalk({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="desktop:pt-52 xl:pt-44 
    lg:pt-48 md:pt-52 mobilemd:pt-28 mobilemd:px-4 mobilesm:px-4 mobilesm:pt-48
    xl:space-y-7 lg:space-y-4 md:space-y-3 mobilemd:space-y-4 mobilesm:py-3"
    >
      <h3
        className="text-[#161616] font-medium text-center leading-none
      desktop:text-[15rem] xl:text-[11rem] lg:text-[10rem] md:text-[9rem] mobilemd:text-[8rem] mobilesm:text-[6rem] ml-[-8px] 
      "
      >
        LET&apos;S TALK!
      </h3>
      <p
        className="lg:block hidden desktop:text-2xl xl:text-[1.3rem] lg:text-xl mobilemd:text-xl 
      desktop:py-0  xl:pt-0 lg:py-0 md:py-3 md:px-4
      text-[#514F4F] text-center"
      >
        {children}
      </p>
      <p
        className="md:block lg:hidden desktop:text-2xl xl:text-[1.3rem] lg:text-xl mobilemd:text-lg 
      desktop:py-0  xl:pt-0 lg:py-0 md:py-3 md:px-4 mobilemd:py-3 mobilesm:py-4
      text-[#514F4F] text-center"
      >
        Feel free to reach out if you have a project in mind, or simply want to
        say hi!
      </p>
    </div>
  );
}

export default LetsTalk;
