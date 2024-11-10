import React from "react";
import pinkcurology from "../../Assets/pinkcrlg.jpg";
import restaurant from "../../Assets/restaurant.jpg";
import redimage from "../../Assets/redimage.jpg";
import Image from "next/image";
import atellier from "../../Assets/atellier.jpg";

function ProjectsLayout() {
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

  return (
    <>
      <div className="text-[#D1CEC6] pb-12 font-medium">
        <h3 className="text-[7vw] ml-[-0.5vw] pb-20">SELECTED WORKS.</h3>
        <div className="flex flex-col gap-12">
          {projects.map(
            ({
              name,
              projectImage,
              alt,
              description,
              deployLink,
              caseStudy,
            }) => (
              <article key={name} className="flex gap-12">
                <figure className="w-[800px] h-[700px]">
                  <Image
                    className="w-full h-full object-cover"
                    src={projectImage}
                    alt={alt}
                  />
                </figure>
                <section className="text-[#fff7f7] flex flex-col gap-7">
                  <h2 className="text-[4vw] font-medium leading-none">
                    {name}
                  </h2>
                  <p className="w-[55ch] text-[#A9A8A8] leading-[1.65] text-lg">
                    {description}
                  </p>
                  <div className="w-full bg-[#FFFFFF] h-[1px]"></div>
                  <div className="flex items-center justify-between">
                    <aside className="flex-col flex gap-1">
                      <div>
                        <span className="uppercase">Development</span>
                      </div>
                      <div>
                        <span className="uppercase">Design</span>
                      </div>
                    </aside>
                    <div className="flex gap-12">
                      <div className="px-8 py-2 rounded-full border-[#85817D] border-2">
                        <button className="text-[#D1CEC6] text-lg">
                          <a href={deployLink}>VIEW WEBSITE</a>
                        </button>
                      </div>
                      <div className="px-8 py-2 rounded-full border-[#85817D] border-2">
                        <button className="text-[#D1CEC6] text-lg ">
                          <a href={caseStudy}> CASE STUDY</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </article>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectsLayout;
