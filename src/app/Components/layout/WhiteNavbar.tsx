import React from "react";
import { motion, MotionValue, useMotionValueEvent } from "framer-motion";
import { compacta, ppneuemontreal } from "../../helpers/fonts";
import { TransitionLink } from "../../helpers/TransitionLink";
import ExitTransition from "../transitions/ExitTransition";
import { useScrollContext } from "../context/ScrollContext";

const WhiteNavbar = ({
  aboutScrollProgress,
}: {
  aboutScrollProgress: MotionValue<number>;
}) => {
  const [isExiting, setIsExiting] = React.useState(false);
  const [progress, setProgress] = React.useState<number>(0);
  const { isFooterInView, navBarColor } = useScrollContext();

  React.useEffect(() => {
    if (isFooterInView) {
      navBarColor.set("#202020");
      setProgress(1);
    } else if (!isFooterInView && progress === 1) {
      navBarColor.set("#DFD9D9");
    }
  }, [isFooterInView]);

  useMotionValueEvent(aboutScrollProgress, "change", (progress) => {
    if (progress > 0) {
      navBarColor.set("#DFD9D9"); // Green for About/Projects
    } else {
      navBarColor.set("#202020"); // Black for other areas
    }
  });

  return (
    <>
      <div className="w-full md:h-0 mobilesm:h-[80px]">
        <motion.nav
          style={{ color: navBarColor }}
          className={` w-full flex justify-between pt-9 md:px-10 mobilesm:px-4 text-lg gap-6 fixed top-0 right-0 z-[999999999999]`}
        >
          <header
            className={`${compacta.className} font-normal md:text-3xl mobilemd:text-5xl mobilesm:text-4xl tracking-[-0.04em] overflow-hidden`}
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
            className={`text-base mobilemd:text-5xl items-center ${navBarColor} flex gap-9 tracking-wide font-medium ${ppneuemontreal.className}`}
          >
            <TransitionLink href="/1">
              <svg
                aria-label="Opens hamburger menu"
                role="button"
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
      </div>
    </>
  );
};

export default WhiteNavbar;
