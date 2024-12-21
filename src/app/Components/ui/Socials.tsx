import React from "react";

function Socials() {
  return (
    <div className="flex flex-1 items-end justify-between px-24 pt-12 pb-5">
      <div className="flex justify-between w-full border-[1px] border-t-[#00000040] border-b-0 border-l-0 border-r-0 pt-2">
        <div className="flex gap-6">
          <p className="text-lg">LOCAL TIME:</p>
          <span className="text-lg text-[#626060]">11:48PM - GMT(-3)</span>
        </div>
        <div className="flex flex-grow-1 gap-6">
          <p className="text-xl">GITHUB</p>
          <p className="text-xl">LINKEDIN</p>
        </div>
      </div>
    </div>
  );
}

export default Socials;
