import React from "react";
import CustomTagTextReveal from "../animations/CustomTagTextReveal";
import { ProjectDescription } from "@/app/Types/Types";

function ProblemSolution({
  title,
  titleDescription,
}: {
  title: string;
  titleDescription: string | undefined;
}) {
  return (
    <div className="pb-20 flex flex-col gap-6">
      <CustomTagTextReveal
        delayIndex={0.2}
        textSize={
          "desktop:text-[1.5rem] xl:text-[1.7rem] lg:text-[1.55rem] md:text-[1.45rem] mobilemd:text-[1.25rem] mobilesm:text-[1.3rem]"
        }
        textColor="text-white"
        leading={"leading-[1.5]"}
        fontWeight="font-normal"
        textContent={title}
      />
      <CustomTagTextReveal
        delayIndex={0.2}
        textSize={
          "desktop:text-[1.25rem] xl:text-[1.7rem] lg:text-[1.55rem] md:text-[1.45rem] mobilemd:text-[1.25rem] mobilesm:text-[1.3rem]"
        }
        textColor="text-[#b5b0b0]"
        leading={"leading-[1.5]"}
        fontWeight="font-normal"
        textContent={titleDescription}
      />
    </div>
  );
}

export default ProblemSolution;
