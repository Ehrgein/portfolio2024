import React from "react";
import CustomTagTextReveal from "../animations/CustomTagTextReveal";
import SmallAboutReveal from "../animations/SmallAboutReveal";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <>
      <motion.div className="xl:pt-32 lg:pt-20 pb-12 lg:pl-6">
        <SmallAboutReveal
          textSize="2xl:text-[2vw] lg:text-[2.5vw] md:text-[2.8vw]"
          textContent="About me."
        />
      </motion.div>
      <aside className="grid grid-cols-10 gap-9">
        <div
          className="w-full
         xl:col-start-5 xl:-col-end-1 lg:col-start-4 lg:-col-end-1 md:col-start-3 md:-col-end-1
         
         tracking-wide"
        >
          <CustomTagTextReveal
            delayIndex={0.2}
            textSize={
              "desktop:text-[1.75vw] xl:text-[1.85vw] lg:text-[2.3vw] md:text-[3vw]"
            }
            textColor="text-[#D1CEC6]"
            leading={"leading-[1.5]"}
            textContent="Hey there! I’m a Frontend Developer passionate about developing intuitive, engaging experiences for the web."
          />
        </div>
        <div
          className="w-full 
          xl:col-start-5 xl:-col-end-1 lg:col-start-4 lg:-col-end-1 md:col-start-3 md:-col-end-1
        tracking-wide "
        >
          <CustomTagTextReveal
            delayIndex={0.3}
            textSize={
              "desktop:text-[1.75vw] xl:text-[1.85vw] lg:text-[2.3vw] md:text-[3vw]"
            }
            textColor="text-[#D1CEC6]"
            leading={"leading-[1.5]"}
            textContent="With an eye for detail and a passion for ux/ui, motion and 3D, I strive to create meaningful experiences that are not only accessible and easy to use, but that also captivate the user’s attention."
          />
        </div>
        <div
          className="w-full 
        xl:col-start-5 xl:-col-end-1 lg:col-start-4 lg:-col-end-1 md:col-start-3 md:-col-end-1
        tracking-wide"
        >
          <CustomTagTextReveal
            delayIndex={0.4}
            textSize={
              "desktop:text-[1.75vw] xl:text-[1.85vw] lg:text-[2.3vw] md:text-[3vw]"
            }
            textColor="text-[#D1CEC6]"
            leading={"leading-[1.5]"}
            textContent="In my free time, I enjoy different media such as video games, film, music, and art, which also shape my creativity in the process. I also love pretending that I’m good at cooking."
          />
        </div>
      </aside>
    </>
  );
}

export default AboutMe;
