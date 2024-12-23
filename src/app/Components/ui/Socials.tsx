import React from "react";

function Socials() {
  return (
    <>
      <div
        className="flex items-end justify-between
       xl:px-24 lg:px-14 md:px-8 pb-5"
      >
        <div className="flex justify-between w-full border-[1px] border-t-[#00000040] border-b-0 border-l-0 border-r-0 pt-2">
          <div className="flex gap-6 items-center">
            <p className="text-lg">LOCAL TIME:</p>
            <span className="text-lg lg:text-base text-[#626060]">
              11:48PM - GMT(-3)
            </span>
          </div>
          <div className="flex flex-grow-1 gap-6">
            <a href="https://github.com/Ehrgein" className="text-lg">
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/alexisfordpy/"
              className="text-lg"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Socials;
