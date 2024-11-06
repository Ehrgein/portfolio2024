"use client";
import React from "react";

import pinkcrlg from "../Assets/pinkcrlg.jpg";
import Image from "next/image";
import { TransitionLink } from "../helpers/TransitionLink";

import { motion } from "framer-motion";

function Page() {
  const mainRef = React.useRef<HTMLDivElement>(null);
  const [showDescription, setShowDescription] = React.useState<boolean>();

  return (
    <>
      <div>
        <motion.div className="bg-[#E1DFDF] relative h-screen flex flex-col py-2 blend hello pb-64">
          <div>{/* <WhiteNavbar /> */}</div>
          <main
            ref={mainRef}
            className={`justify-center w-full flex flex-col flex-grow pt-48 relative`}
          >
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="w-full flex flex-col px-4 relative"
            >
              <div className="w-full flex flex-col justify-center items-center">
                <div className="overflow-hidden">
                  <motion.div
                    onHoverStart={() => setShowDescription(true)}
                    onHoverEnd={() => setShowDescription(false)}
                    className="w-[425px] h-[525px]"
                  >
                    <TransitionLink href="/1">
                      <Image
                        className="w-full h-full object-cover"
                        alt=""
                        src={pinkcrlg}
                      />
                    </TransitionLink>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showDescription ? 1 : 0 }}
                  transition={{ duration: 0.2, ease: "easeIn" }}
                  className="flex flex-col pt-2 w-[425px]"
                >
                  <div className="flex justify-between">
                    <p className="self-start text-[#5E5D5D] text-base">05.</p>
                    <span>Design, Development</span>
                  </div>
                  <p className="capitalize text-3xl pt-1 border-0 border-b-2 outline-offset-8  border-black pb-[6px]">
                    keep moving
                  </p>
                </motion.div>
              </div>
            </motion.section>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="thumbnailcontainer absolute top-[20%] right-[4%] flex flex-col gap-4"
            >
              <div>
                <Image
                  className="w-40 h-24 object-cover"
                  alt=""
                  src={pinkcrlg}
                />
              </div>
              <div>
                <Image
                  className="w-40 h-24 object-cover"
                  alt=""
                  src={pinkcrlg}
                />
              </div>
              <div>
                <Image
                  className="w-40 h-24 object-cover"
                  alt=""
                  src={pinkcrlg}
                />
              </div>
              <div>
                <Image
                  className="w-40 h-24 object-cover"
                  alt=""
                  src={pinkcrlg}
                />
              </div>
              <div>
                <Image
                  className="w-40 h-24 object-cover"
                  alt=""
                  src={pinkcrlg}
                />
              </div>
              <div>
                <Image
                  className="w-40 h-24 object-cover"
                  alt=""
                  src={pinkcrlg}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="absolute bottom-0 text-4xl pl-10"
            >
              SELECTED WORKS.
            </motion.div>
          </main>
        </motion.div>
      </div>
      <div className="noise-bg"></div>
    </>
  );
}

export default page;
