import React from "react";
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import svgCopy from "@/app/Assets/svgs/SVGCopy.svg";

function FooterContact({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
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

  return (
    <div className="pt-10 flex px-24">
      <div className="w-full relative flex flex-col flex-grow-0">
        <div>
          <motion.div
            ref={scope}
            className="relative overflow-hidden text-[#161616] border-b-[1px] border-b-[#323232] flex w-fit text-[36px]"
          >
            <a className="" id="devEmail">
              <p className="text-[#161616] opacity-90 lg:text-[3.5vw]">
                {children}
              </p>
              <motion.div className="w-full h-[1px] absolute bottom-0 left-0" />
            </a>
            <div
              onClick={handleCopyToClipboard}
              id="clipboard"
              className="relative pl-3 text-xl flex items-center cursor-pointer"
            >
              <Image alt="Copy to clipboard icon" src={svgCopy} />
            </div>
            <div
              id="copied"
              className="absolute opacity-95 text-[#161616] top-[100%]"
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
  );
}

export default FooterContact;
