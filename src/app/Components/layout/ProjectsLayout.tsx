import React from "react";
import ExitTransition from "../transitions/ExitTransition";
import ProjectList from "./ProjectList";
import pinkcurology from "../../Assets/pinkcrlg.jpg";
import restaurant from "../../Assets/restaurant.jpg";
import redimage from "../../Assets/redimage.jpg";
import atellier from "../../Assets/atellier.jpg";

function ProjectsLayout({
  isExiting,
  setIsExiting,
}: {
  isExiting: boolean;
  setIsExiting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const projects = [
    {
      name: "Keep Moving",
      projectImage: pinkcurology,
      description:
        "Urban-style e-commerce platform, showcasing modern fashion and lifestyle products with a seamless user experience. Made with React, Tailwind, MySQL .",
      deployLink: "https://keepmovingclothing.vercel.app/",
      caseStudy: "/1",
      alt: "Woman wearing sneakers representing urban fashion",
    },
    {
      name: "Sansei",
      projectImage: restaurant,
      description:
        "Landing page for local Japanese owned restaurant which includes a booking/reserve system. Made with React, Tailwind, MySQL .",
      deployLink: "https://keepmovingclothing.vercel.app/",
      caseStudy: "/1",
      alt: "Woman wearing sneakers representing urban fashion",
    },
    {
      name: "Curology",
      projectImage: redimage,
      description:
        "Beauty products with a clean and minimal UI, focused on seamless transitions. Made with React, Tailwind, MySQL .",
      deployLink: "https://keepmovingclothing.vercel.app/",
      caseStudy: "/2",
      alt: "Woman wearing sneakers representing urban fashion",
    },
    {
      name: "Lotus",
      projectImage: atellier,
      description:
        "Medical dashboard created with the goal of helping low income communities manage their patients. Made with React, Tailwind, PostgreSQL .",
      deployLink: "https://keepmovingclothing.vercel.app/",
      caseStudy: "/1",
      alt: "Woman wearing sneakers representing urban fashion",
    },
    {
      name: "Lights Out",
      projectImage: pinkcurology,
      description:
        "Project made with the purpose of tracking outages in the Buenos Aires area, scraping data from the national provider. Made with Next, Puppeteer, Tailwind, MongoDB .",
      deployLink: "https://keepmovingclothing.vercel.app/",
      caseStudy: "/1",
      alt: "Woman wearing sneakers representing urban fashion",
    },
  ];

  const handleSetIsExiting = () => {
    setIsExiting(true);
  };

  return (
    <>
      <div className="text-[#D1CEC6] pb-12 font-medium">
        <div
          className="desktop:text-[8rem] xl:text-[6rem] lg:text-[8vw] md:text-[4rem] mobilesm:text-6xl
        mobilemd:text-[4rem] mobilemd:leading-[1.1] mobilesm:leading-tight
        mobilexl:px-1 mobilemd:px-3 mobilesm:px-3
        desktop:pb-24 xl:pb-24 lg:pb-12 md:pb-8 mobilemd:pb-10 mobilesm:pb-7"
        >
          <h3>SELECTED WORKS.</h3>
        </div>
        <div className="flex flex-col gap-10 md:gap-16 mobilemd:px-3 mobilesm:px-3">
          <ProjectList
            projects={projects}
            handleSetIsExiting={handleSetIsExiting}
          />
        </div>
      </div>
      {isExiting && <ExitTransition />}
    </>
  );
}

export default ProjectsLayout;
