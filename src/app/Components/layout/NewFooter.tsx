import React from "react";
import Socials from "../ui/Socials";
import { motion } from "framer-motion";
// import FooterContact from "../ui/FooterContact";
import LetsTalk from "../ui/LetsTalk";
import { useScrollContext } from "../context/ScrollContext";
import { useInView } from "framer-motion";

function NewFooter({}: // footerRef,
{
  // footerRef?: React.RefObject<HTMLDivElement>;
}) {
  const { footerRef, setIsFooterInView } = useScrollContext();

  const footerInView = useInView(footerRef, { amount: 0.9 });

  React.useEffect(() => {
    if (footerInView) {
      setIsFooterInView(true);
    } else {
      setIsFooterInView(false);
    }
  }, [footerInView]);

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
            <Socials />
          </motion.div>
        </footer>
      </motion.div>
    </>
  );
}

export default NewFooter;
