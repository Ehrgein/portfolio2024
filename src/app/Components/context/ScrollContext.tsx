"use client";
import React, { useContext, useRef, useState } from "react";
import { MotionValue, useMotionValue } from "framer-motion";

type ScrollContextType = {
  isFooterInView: boolean;
  setIsFooterInView: (value: boolean) => void;
  footerRef: React.RefObject<HTMLDivElement>;
  navBarColor: MotionValue<string>;
};

const ScrollContext = React.createContext<ScrollContextType | undefined>(
  undefined
);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterInView, setIsFooterInView] = useState(false);
  const navBarColor = useMotionValue("#202020"); // Default color

  return (
    <ScrollContext.Provider
      value={{ footerRef, isFooterInView, navBarColor, setIsFooterInView }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
