import React from "react";
import { motion } from "framer-motion";
import { compacta, ppneuemontreal } from "../../helpers/fonts";
import { TransitionLink } from "../../helpers/TransitionLink";
import ExitTransition from "../transitions/ExitTransition";

const WhiteNavbar = () => {
  const [isExiting, setIsExiting] = React.useState(false);

  return (
    <>
      <motion.nav
        className={`w-full flex justify-between pt-9 px-10 text-lg gap-6 fixed top-0 right-0 z-30  `}
      >
        <header
          className={`${compacta.className} text-3xl  tracking-[-0.04em] text-[#161616]`}
        >
          ALEXIS
        </header>
        <ul
          className={`${ppneuemontreal.className} tracking-wide font-medium flex justify-center items-center gap-12 text-lg text-[#161616]`}
        >
          <li
            onClick={() => setIsExiting(true)}
            className={`uppercase text-xl`}
          >
            <TransitionLink href="/1">Works</TransitionLink>
          </li>
        </ul>
      </motion.nav>
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
      {isExiting && <ExitTransition />}
    </>
  );
};

export default WhiteNavbar;
