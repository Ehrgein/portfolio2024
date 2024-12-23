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
      <motion.div ref={footerRef} id="footerRef">
        <footer
          className="relative h-screen"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <motion.div className="h-full w-full fixed bottom-0 flex flex-col">
            <LetsTalk>
              I’m always happy to talk. Feel free to reach out if you have a
              project in mind, or simply want to say hi!
            </LetsTalk>
            <div className="flex px-24">
              <div
                className="w-full relative flex flex-col justify-center items-center flex-grow-0
            desktop:pt-10 xl:pt-3 md:pt-5"
              >
                <FooterContact>hello@alexisford.dev</FooterContact>
              </div>
            </div>
            <div className="flex flex-grow items-end justify-end px-24 pb-6"></div>
            <Socials />
          </motion.div>
        </footer>
      </motion.div>
      {/* mobile footer */}

      {/* <footer className="md:hidden sticky bottom-0 h-screen z-[-1]">
        <div className="h-full flex flex-col">
          <motion.div className="flex flex-col h-full pt-28">
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
      </footer> */}
    </>
  );
}

export default NewFooter;
