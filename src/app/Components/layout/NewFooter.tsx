import React from "react";
import FooterHeader from "../ui/FooterHeader";
import FooterContact from "../ui/FooterContact";
import Socials from "../ui/Socials";
import { useAnimate, motion } from "framer-motion";
import Image from "next/image";
import svgCopy from "@/app/Assets/svgs/SVGCopy.svg";

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
          <div className="pt-48 px-24 space-y-4">
            <h3 className="text-[#161616] font-medium text-[12vw] ml-[-8px] text-center leading-none">
              LET'S TALK!
            </h3>
            <p className="text-[#514F4F] text-2xl py-3 text-center">
              I’m always happy to talk. Feel free to reach out if you have a
              project in mind, or simply want to say hi!
            </p>
          </div>
          <div className="pt-10 flex px-24">
            <div className="w-full relative flex flex-col justify-center items-center  flex-grow-0">
              <div>
                <motion.div
                  ref={scope}
                  className="flex w-fit relative overflow-hidden text-[#161616] border-b-[1px] border-b-[#323232]  text-[36px]"
                >
                  <a className="" id="devEmail">
                    <p className="text-[#161616] text-[3.5vw] opacity-95">
                      hello@alexisford.dev
                    </p>
                    <motion.div className="w-full h-[1px]  absolute bottom-0 left-0" />
                  </a>
                  <div
                    onClick={handleCopyToClipboard}
                    id="clipboard"
                    className="relative pl-3 text-xl flex items-center cursor-pointer"
                  >
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 54 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="10"
                        y="22"
                        width="30"
                        height="30"
                        fill="#FAFAFA"
                        stroke="black"
                      />

                      <rect
                        x="3.25"
                        y="16.25"
                        width="30"
                        height="30"
                        fill="#FAFAFA"
                        stroke="black"
                      />
                    </svg>
                  </div>
                  <div
                    id="copied"
                    className="absolute text-[3.5vw] opacity-95 text-[#161616] top-[100%]"
                  >
                    Talk to you soon!
                  </div>
                  <div
                    id="checkmark"
                    className="opacity-0 w-10 h-16 pointer-events-none absolute top-0 right-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="48"
                      fill="none"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex flex-grow items-end justify-end px-24 pb-6"></div>
          <div className="flex items-end justify-between px-24 pb-5">
            <div className="flex justify-between w-full border-[1px] border-t-[#00000040] border-b-0 border-l-0 border-r-0 pt-2">
              <div className="flex gap-6">
                <p className="text-xl">LOCAL TIME:</p>
                <span className="text-xl text-[#626060]">
                  11:48PM - GMT(-3)
                </span>
              </div>
              <div className="flex flex-grow-1 gap-6">
                <a href="https://github.com/Ehrgein" className="text-xl">
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/alexisfordpy/"
                  className="text-xl"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default NewFooter;
