import React from "react";
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
} from "framer-motion";
import { compacta, ppneuemontreal } from "../../helpers/fonts";
import { TransitionLink } from "../../helpers/TransitionLink";
import ExitTransition from "../transitions/ExitTransition";

const WhiteNavbar = ({
  navBarColor,
  scrollYProgress,
}: {
  navBarColor: MotionValue<string>;
  scrollYProgress: MotionValue<number>;
}) => {
  const [isExiting, setIsExiting] = React.useState(false);

  React.useEffect(() => {
    const unsubscribeScrollProg = scrollYProgress.on("change", (progress) => {
      console.log(progress);
      if (progress <= 0.06) {
        navBarColor.set("#DFD9D9"); // Black when past threshold
      } else {
        navBarColor.set("#202020"); // White otherwise
      }
    });

    return () => unsubscribeScrollProg();
  }, [scrollYProgress]);

  return (
    <>
      <motion.nav
        style={{ color: navBarColor }}
        className={`w-full flex justify-between pt-9 px-10 text-lg gap-6 fixed top-0 right-0 z-30`}
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
      </motion.nav>
      {isExiting && <ExitTransition />}
    </>
  );
};

export default WhiteNavbar;
