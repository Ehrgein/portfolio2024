import React from "react";
import { motion } from "framer-motion";
import { compacta, ppneuemontreal } from "../../helpers/fonts.tsx";
import { TransitionLink } from "../../helpers/TransitionLink.tsx";
import ExitTransition from "../transitions/ExitTransition.tsx";

const NavBar = () => {
  const [isExiting, setIsExiting] = React.useState(false);

  return (
    <>
      <motion.nav
        className={`w-full flex justify-between px-10 pt-9 pb-4 text-lg  gap-5 text fixed top-0 right-0 z-30  `}
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
      {isExiting && <ExitTransition />}
    </>
  );
};

export default NavBar;
