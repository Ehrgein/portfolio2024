import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { compacta, ppneuemontreal } from "../helpers/fonts";
import { TransitionLink } from "../helpers/TransitionLink";
import FullScreenPanel from "./EnterAnimation";

const NavBar = () => {
  const [isExiting, setIsExiting] = React.useState(false);

  console.log(isExiting);

  return (
    <>
      <motion.nav
        className={`w-full flex justify-between px-10 pt-9 pb-4 text-lg  gap-6 text fixed top-0 right-0 z-30  bg-[#161616] `}
      >
        <header
          className={`${compacta.className} text-3xl  tracking-[-0.04em] text-[#9CB0A3]`}
        >
          ALEXIS
        </header>
        <ul
          className={`${ppneuemontreal.className} tracking-wide font-medium flex gap-12 pr-4 text-base text-[#9CB0A3]`}
        >
          <li onClick={() => setIsExiting(true)} className={`uppercase`}>
            <TransitionLink href="/1">Works</TransitionLink>
          </li>
          <li onClick={() => setIsExiting(true)} className={`uppercase`}>
            <TransitionLink href="/1">About</TransitionLink>
          </li>
          <li onClick={() => setIsExiting(true)} className={`uppercase`}>
            <TransitionLink href="/1">Contact</TransitionLink>
          </li>
        </ul>
      </motion.nav>
      <AnimatePresence>
        {isExiting && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.0, // Reduce the duration further for quicker movement
              ease: [0.5, 0, 0.3, 1], // Faster start and more acceleration
              delay: 0.3,
            }}
            className="fixed bottom-0 left-0 w-full h-full bg-[#121212] z-50"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
