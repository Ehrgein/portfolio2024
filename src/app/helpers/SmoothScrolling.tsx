"use client";
import React, { Children } from "react";
import Lenis from "lenis";
import { ReactLenis, useLenis } from "lenis/react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScrolling;
