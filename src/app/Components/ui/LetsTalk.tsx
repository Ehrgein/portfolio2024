import React from "react";
import FooterContact from "./FooterContact";

function LetsTalk({ children }: { children: React.ReactNode }) {
  return (
    // mobilesm:pt-48 div had this.
    // mobilemd:pt-28 and this

    <div
      className="flex flex-col h-full justify-center items-center
    desktop:pt-16 xl:pt-28 lg:pt-4 md:pt0 
    mobilexl:pt-24 mobilesm:pt-20 
    mobilemd:px-4 mobilesm:px-4 
    "
    >
      <h3
        className="text-[#161616] font-medium text-center leading-none
      desktop:text-[15rem] xl:text-[11rem] lg:text-[10.5rem] md:text-[8.5rem] mobilemd:text-[8rem] mobilesm:text-[6.5rem] ml-[-8px] 
      "
      >
        LET&apos;S TALK!
      </h3>
      <p
        className="xl:block hidden desktop:text-2xl xl:text-[1.5rem] lg:text-xl mobilemd:text-xl 
      desktop:pt-3 xl:pt-6
      md:px-4
      text-[#514F4F] text-center"
      >
        {children}
      </p>
      <p
        className="xl:hidden block desktop:text-2xl lg:text-[1.35rem] md:text-xl mobilemd:text-lg 
    lg:pt-3 md:pt-4 md:px-4 mobilemd:pt-3 mobilesm:pt-3
      text-[#514F4F] text-center"
      >
        Feel free to reach out if you have a project in mind, or simply want to
        say hi!
      </p>
      <div className="flex px-24">
        <div className="w-full relative flex flex-col justify-center items-center flex-grow-0">
          <FooterContact>alekffbe@gmail.com</FooterContact>
        </div>
      </div>
    </div>
  );
}

export default LetsTalk;
