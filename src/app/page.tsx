"use client";
import Landing from "./Pages/Landing";
import Link from "next/link";
import Image from "next/image";
import github from "./Assets/svgs/github-90.svg";
import linkedin from "./Assets/svgs/linkedin-100.svg";
import Projects from "./Pages/Projects";
import React from "react";
import Lenis from "lenis";
import { ppneuemontreal } from "./helpers/fonts";

import ParagraphReveal from "./Components/ParagraphReveal";
import HorizontalScroll from "./Components/HorizontalScroll";
import VerticalCards from "./Components/VerticalCards";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isExiting, setIsExiting] = React.useState(false);

  console.log(isExiting);

  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  React.useEffect(() => {
    // Simulate a delay of 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    console.log(timer);

    // Clear timeout if component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <>
        <Landing />
        {/* <section className="px-52 h-[80svh] bg-[#161616] space-y-10">
          <ParagraphReveal>
            Hey there! I’m a frontend developer based in Buenos Aires,
            passionate about bringing ideas into engaging, interactive
            experiences.
          </ParagraphReveal>
          <ParagraphReveal>
            I draw inspiration from various media, including videogames, film,
            music, and art, to shape my creative process.
          </ParagraphReveal>
        </section> */}
        {/* <Projects /> */}
        <div
          className={`${ppneuemontreal.className} bg-[#161616] text-white bottom-0 text-8xl px-2`}
        >
          <p className="">SELECTED WORKS.</p>
        </div>
        <HorizontalScroll isExiting={isExiting} setIsExiting={setIsExiting} />
        {/* <VerticalCards /> */}
        <section className="h-screen bg-teal-300"></section>
        <footer className="bg-[#161616] text-white w-full justify-between px-12 pb-6 ">
          <div className="flex gap-2">
            <Link
              href="https://github.com/Ehrgein"
              className={`flex gap-12  text-xl text-[#9CB0A3]`}
            >
              <Image alt="Github icon" src={github} className="h-auto w-8" />
            </Link>
            <span className={`flex gap-12  text-xl text-[#9CB0A3]`}>
              <Image
                alt="LinkedIn Logo"
                src={linkedin}
                className="h-auto w-8"
              />
            </span>
          </div>
          <div className="flex justify-end items-end">
            <p className={`flex gap-12 pr-4 text-xl text-[#9CB0A3]`}>ABOUT</p>
          </div>
        </footer>
      </>
      <div className="noise-bg"></div>
    </>
  );
}
