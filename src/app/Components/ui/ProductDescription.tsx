import React from "react";
import { ProjectDescription, ProjectStack } from "@/app/Types/Types";

function TechnologiesList({ technologies }: { technologies: ProjectStack[] }) {
  return (
    <>
      {technologies.map(({ title, value }) => {
        return (
          <li key={crypto.randomUUID()} className="flex justify-between">
            <span>{title} </span>
            <span>{value}</span>
          </li>
        );
      })}
    </>
  );
}

function ProductDescription({ projectData }: ProjectDescription) {
  const { description, technologies } = projectData;

  return (
    <div className="pt-60 w-full relative mx-auto my-0 pb-40 grid grid-cols-8">
      <div className="w-full flex flex-col col-span-4">
        <h3 className="text-4xl">Product Description</h3>
        <p className="text-[1.3rem] text-[#B5B0B0] leading-loose pt-10 tracking-wide">
          {description}
        </p>
      </div>
      <aside className="w-full col-start-6 -col-end-1 flex">
        <ul
          className="w-full flex flex-col gap-6 justify-center pt-4 text-[0.9rem]
              "
        >
          <TechnologiesList technologies={technologies} />
        </ul>
      </aside>
    </div>
  );
}

export default ProductDescription;
