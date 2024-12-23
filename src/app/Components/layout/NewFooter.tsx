import React from "react";
import Socials from "../ui/Socials";
import { motion } from "framer-motion";
import FooterContact from "../ui/FooterContact";
import LetsTalk from "../ui/LetsTalk";

function NewFooter({
  footerRef,
}: {
  footerRef?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <>
      <footer
        ref={footerRef}
        className="hidden md:block relative h-screen"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <motion.div className="h-full w-full fixed bottom-0 flex flex-col">
          <LetsTalk>
            I’m always happy to talk. Feel free to reach out if you have a
            project in mind, or simply want to say hi!
          </LetsTalk>
          <div className="flex px-24">
            <div className="w-full relative flex flex-col justify-center items-center flex-grow-0">
              <FooterContact>hello@alexisford.dev</FooterContact>
            </div>
          </div>
          <div className="flex flex-grow items-end justify-end px-24 pb-6"></div>
          <Socials />
        </motion.div>
      </footer>
      {/* mobile footer */}
      <footer className="md:hidden block relative">
        <div className="relative h-screen flex flex-col">
          <motion.div
            ref={footerRef}
            className="flex flex-col top-0 h-full pt-28"
          >
            <LetsTalk>
              Feel free to reach out if you have a project in mind, or want tos
              say hi!
            </LetsTalk>
            <div className="flex px-24">
              <div className="w-full relative flex flex-col justify-center items-center">
                <FooterContact>hello@alexisford.dev</FooterContact>
              </div>
            </div>
            <Socials />
          </motion.div>
        </div>
      </footer>
    </>
  );
}

export default NewFooter;
