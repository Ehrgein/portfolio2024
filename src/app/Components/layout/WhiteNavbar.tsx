import React from "react";
import { motion } from "framer-motion";
import { compacta, ppneuemontreal } from "../../helpers/fonts";
import { TransitionLink } from "../../helpers/TransitionLink";
import ExitTransition from "../transitions/ExitTransition";

const WhiteNavbar = ({ navBarColor }: { navBarColor: string }) => {
  const [isExiting, setIsExiting] = React.useState(false);

  // COLOR FOR BLEND MODE

  return (
    <>
      <nav
        className={`w-full flex justify-between pt-9 px-10 text-lg gap-6 fixed top-0 right-0 z-30 ${navBarColor}  `}
      >
        <header
          className={`${compacta.className} font-normal text-3xl tracking-[-0.04em] overflow-hidden`}
        >
          <motion.h3
            animate={{
              y: "0%",
            }}
            initial={{
              y: "100%",
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
        {/* <ul
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
        </ul> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          onClick={() => setIsExiting(true)}
          className={`text-base items-center ${navBarColor} flex gap-9 tracking-wide font-medium ${ppneuemontreal.className}`}
        >
          <TransitionLink
            href="/1
          "
          >
            <svg
              width="64"
              height="32"
              viewBox="0 0 40 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="32" y="5" width="48" height="2" fill="currentColor" />
              <rect x="24" y="11" width="40" height="2" fill="currentColor" />
              <rect x="16" y="17" width="48" height="2" fill="currentColor" />
            </svg>
          </TransitionLink>
        </motion.div>
      </nav>
      {isExiting && <ExitTransition />}
    </>
  );
};

export default WhiteNavbar;
