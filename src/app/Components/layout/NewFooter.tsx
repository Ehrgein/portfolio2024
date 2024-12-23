import React from "react";
import Socials from "../ui/Socials";
import { useAnimate, motion } from "framer-motion";
import FooterContact from "../ui/FooterContact";
import LetsTalk from "../ui/LetsTalk";

function NewFooter({ footerRef }: any) {
  const [scope, animate] = useAnimate();

  const handleCopyToClipboard = async () => {
    try {
      await window.navigator.clipboard.writeText("hello@alexisford.dev");
      console.log("copied!");
    } catch (err) {
      console.error("unable to copy"), err;
    }

    handleAnimateClipboard();
  };

  const handleAnimateClipboard = async () => {
    animate("#devEmail", { y: "-100%" });

    await animate(
      "#copied",
      { y: "-100%" },
      { duration: 0.4, ease: [0.6, 0, 0, 1] }
    );

    animate(
      "#copied",
      { y: "100%" },
      { delay: 2, duration: 0.4 } // Include duration for smooth transition
    );

    // Reset the email animation to its initial state
    await animate(
      "#devEmail",
      { y: "0%" },
      { duration: 0.4, delay: 2, ease: [0.6, 0, 0, 1] }
    );

    // animate("#checkmark", { opacity: 0 });
    animate("#clipboard", { opacity: 1 });
  };

  //       <div className="relative h-[calc(100vh+100vh)] -top-[100vh]">
  //       <div className="h-[100vh] sticky flex flex-col  top-[calc(100vh-100vh)]">

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
              <FooterContact href="">hello@alexisford.dev</FooterContact>
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
