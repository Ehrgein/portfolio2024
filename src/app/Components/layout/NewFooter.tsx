import React from "react";
import Socials from "../ui/Socials";
import { motion } from "framer-motion";
import FooterContact from "../ui/FooterContact";
import LetsTalk from "../ui/LetsTalk";

function NewFooter({ footerRef }: any) {
  return (
    <footer
      className="relative h-[100vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+100vh)] -top-[100vh]">
        <motion.div
          ref={footerRef}
          className="h-[100vh] sticky flex flex-col  top-0"
        >
          <LetsTalk />
          <div className="flex px-24">
            <div className="w-full relative flex flex-col justify-center items-center flex-grow-0">
              <FooterContact>hello@alexisford.dev</FooterContact>
            </div>
          </div>
          <div className="flex flex-grow items-end justify-end px-24 pb-6"></div>
          <Socials />
        </motion.div>
      </div>
    </footer>
  );
}

export default NewFooter;