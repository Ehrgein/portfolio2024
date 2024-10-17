import React from "react";

function Technologies() {
  return (
    <>
      <div className="space-y-2">
        <p className="text-lg text-[#1E1E1E] ">Technologies</p>
        <ul className="text-sm text-[#635E5E] flex gap-2">
          <li>Next JS</li>
          <li>Framer Motion</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className="space-y-2">
        <p className="w-full text-lg text-[#1E1E1E]">Role</p>
        <ul className="text-sm text-[#635E5E] flex gap-2">
          <li>Development</li>
          <li> - </li>
          <li>UX/UI</li>
        </ul>
      </div>
      <div className="space-y-2">
        <p className="w-full text-lg text-[#1E1E1E]">Year</p>
        <ul className="text-sm text-[#635E5E] flex gap-2">
          <li>2023</li>
        </ul>
      </div>
    </>
  );
}

export default Technologies;
