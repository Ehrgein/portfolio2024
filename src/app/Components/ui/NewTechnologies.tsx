import React from "react";

function NewTechnologies() {
  return (
    <div className="flex gap-12 justify-end">
      <div className="space-y-2 ">
        <p className="w-full text-xl">Technologies</p>
        <ul className="text-sm flex gap-2">
          <li>Next JS</li>
          <li>Framer Motion</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <div className="space-y-2">
        <p className="w-full text-xl">Role</p>
        <ul className="text-sm flex gap-2">
          <li>Development</li>
          <li> - </li>
          <li>UX/UI</li>
        </ul>
      </div>
      <div className="space-y-2">
        <p className="w-full text-xl">Year</p>
        <ul className="text-sm flex gap-2">
          <li>2023</li>
        </ul>
      </div>
    </div>
  );
}

export default NewTechnologies;
