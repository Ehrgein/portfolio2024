import React from "react";
import { motion } from "framer-motion";
import { compacta, ppneuemontreal } from "../../helpers/fonts";
import { TransitionLink } from "../../helpers/TransitionLink";
import ExitTransition from "../transitions/ExitTransition";

const WhiteNavbar = () => {
  const [isExiting, setIsExiting] = React.useState(false);

  return (
    <>
      <div className="overflow-hidden">
        <nav
          className={`w-full flex justify-between pt-9 px-10 text-lg gap-6 fixed mix-blend-difference top-0 right-0 z-30 text-[#f0f0f0]  `}
        >
          <header
            className={`${compacta.className} font-normal text-3xl tracking-[-0.04em] overflow-hidden`}
          >
            <motion.h3
              animate={{
                opacity: 1,
                y: "0%",
              }}
              initial={{
                opacity: 0,
                y: "60%",
              }}
              transition={{
                delay: 0.2,
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              ALEXIS
            </motion.h3>
          </header>
          <ul
            className={`${ppneuemontreal.className} tracking-wide flex justify-center items-center gap-12 text-lg`}
          >
            <motion.li
              animate={{
                opacity: 1,
                y: "0%",
              }}
              initial={{
                opacity: 0,
                y: "20%",
              }}
              transition={{
                delay: 0.2,
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => setIsExiting(true)}
              className={`uppercase text-xl`}
            >
              <TransitionLink href="/1">Works</TransitionLink>
            </motion.li>
          </ul>
        </nav>
      </div>
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
