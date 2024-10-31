import React from "react";
import Link from "next/link";

function FooterWhite() {
  return (
    <footer className="text-[#161616] w-full flex justify-between p-7">
      <div className="flex flex-col gap-1 font-medium">
        <Link
          href="https://github.com/Ehrgein"
          className={`flex text-xl text-[#161616] uppercase`}
        >
          Github
        </Link>
        <span className={`flex text-xl text-[#161616] uppercase`}>
          Linkedin
        </span>
      </div>
      <div className="flex justify-end items-end font-medium">
        <p className={`flex text-xl text-[#161616]`}>ABOUT</p>
      </div>
    </footer>
  );
}

export default FooterWhite;
