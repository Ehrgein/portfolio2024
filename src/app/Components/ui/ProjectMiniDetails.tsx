import React from "react";

function ProjectMiniDetails() {
  return (
    <div className="fixed bottom-0 pt-6 pb-2 pr-10 w-[40%] flex text-[#161616] opacity-90 mt-auto">
      <ul className="uppercase text-sm flex flex-col gap-1 w-full">
        <li className="flex flex-col">
          <div className="flex justify-between pb-[.5rem]">
            <p className="text-[12px] tracking-[0.15em]">YEAR</p>
            <p className="capitalize items-center">2024</p>
          </div>
          <div className="h-[1px] bg-[#7e7d7d] w-full"></div>
        </li>
        <li className="flex flex-col">
          <div className="flex justify-between py-[.5rem]">
            <p className="text-[12px] tracking-[0.15em]">Role</p>
            <div className="capitalize flex items-center gap-3">
              <p>Design</p>
              <p>Development</p>
            </div>
          </div>
          <div className="h-[1px] bg-[#7e7d7d] w-full"></div>
        </li>
        <li className="flex flex-col">
          <div className="flex justify-between">
            <p className="text-[12px] py-[.5rem] tracking-[0.15em]">
              Technologies
            </p>
            <div className="capitalize flex items-center justify-end gap-3">
              <p>React </p>
              <p>Tailwind</p>
              <p>Mysql </p>
            </div>
          </div>
          <div className="h-[1px] bg-[#7e7d7d] w-full"></div>
        </li>
      </ul>
    </div>
  );
}

export default ProjectMiniDetails;
