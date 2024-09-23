"use client";
import Landing from "./Pages/Landing";
import { ppneuemontreal } from "./helpers/fonts";
import { motion, useInView, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import github from "./Assets/svgs/github-90.svg";
import linkedin from "./Assets/svgs/linkedin-100.svg";
import Projects from "./Pages/Projects";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import ParagraphReveal from "./Components/ParagraphReveal";

export default function Home() {
  // Scroll

  const lenis = new Lenis();

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Landing />
      <section className="px-52 h-[80svh] bg-[#161616] space-y-10">
        <ParagraphReveal>
          Hey there! Hey there! I’m a frontend developer based in Buenos Aires,
          passionate about bringing ideas into engaging, interactive
          experiences.
        </ParagraphReveal>
        <ParagraphReveal>
          I draw inspiration from various media, including videogames, film,
          music, and art, to shape my creative process.
        </ParagraphReveal>
      </section>

      <Projects />
      <footer className="bg-[#161616] text-white w-full justify-between px-12 pb-6 ">
        <div className="flex gap-2">
          <Link
            href="https://github.com/Ehrgein"
            className={`${ppneuemontreal.className} flex gap-12  text-xl text-[#9CB0A3]`}
          >
            <Image alt="Github icon" src={github} className="h-auto w-8" />
          </Link>
          <span
            className={`${ppneuemontreal.className} flex gap-12  text-xl text-[#9CB0A3]`}
          >
            <Image alt="LinkedIn Logo" src={linkedin} className="h-auto w-8" />
          </span>
        </div>
        <div className="flex justify-end items-end">
          <p
            className={`${ppneuemontreal.className} flex gap-12 pr-4 text-xl text-[#9CB0A3]`}
          >
            ABOUT
          </p>
        </div>
      </footer>
    </>
  );
}
