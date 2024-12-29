"use client";
import React from "react";

import { ReactLenis, useLenis } from "lenis/react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScrolling;
