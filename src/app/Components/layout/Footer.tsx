import React from "react";
import BackToTopReusable from "../animations/BackToTopReusable";
import Socials from "../ui/Socials";
import FooterHeader from "../ui/FooterHeader";
import FooterContact from "../ui/FooterContact";

function Footer() {
  return (
    <footer
      className="relative h-[550px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+550px)] -top-[100vh]">
        <div className="h-[550px] sticky flex flex-col  top-[calc(100vh-550px)]">
          <FooterHeader
            header="Want to reach out?"
            paragraph="I’m always happy to talk. Feel free to reach out if you have a project in mind, or simply want to say hi!"
          />
          <FooterContact href="">hello@alexisford.dev</FooterContact>
          <div className="flex flex-grow items-end justify-end px-24 pb-6">
            <BackToTopReusable />
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
