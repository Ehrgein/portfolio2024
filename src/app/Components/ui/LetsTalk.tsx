import React from "react";
import FooterContact from "./FooterContact";

function LetsTalk({ children }: { children: React.ReactNode }) {
  return (
    // mobilesm:pt-48 div had this.
    // mobilemd:pt-28 and this

    <div
      className="flex flex-col h-full justify-center items-center
      desktop:pt-52 xl:pt-44 mobilexl:pt-20 mobilesm:pt-16
    lg:pt-48 md:pt-52  
    mobilemd:px-4 mobilesm:px-4 
    xl:space-y-7 lg:space-y-4 md:space-y-3 mobilemd:space-y-4 mobilesm:py-3"
    >
      <h3
        className="text-[#161616] font-medium text-center leading-none
      desktop:text-[15rem] xl:text-[11rem] lg:text-[10rem] md:text-[9rem] mobilemd:text-[8rem] mobilesm:text-[6.5rem] ml-[-8px] 
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
      <div className="flex px-24">
        <div
          className="w-full relative flex flex-col justify-center items-center flex-grow-0
                  desktop:pt-10 xl:pt-3 md:pt-5"
        >
          <FooterContact>hello@alexisford.dev</FooterContact>
        </div>
      </div>
    </div>
  );
}

export default LetsTalk;
