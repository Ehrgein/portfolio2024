import React from "react";
import { motion } from "framer-motion";
import { compacta, ppneuemontreal } from "../helpers/fonts";
import { NavBarProps } from "../interfaces/interfaces";

const NavBar = ({ navColor, backgroundNavColor }: NavBarProps) => {
  return (
    <motion.nav
      style={{ color: navColor, backgroundColor: backgroundNavColor }}
      className={`w-full flex justify-between px-10 pt-9 pb-4 text-lg  gap-6 text fixed top-0 right-0 z-30  bg-[#161616] `}
    >
      <header
        className={`text-3xl ${compacta.className} tracking-[-0.04em] text-[#9CB0A3]`}
      >
        ALEXIS
      </header>
      <ul
        className={`${ppneuemontreal.className} flex gap-12 pr-4 text-xl text-[#9CB0A3]`}
      >
        <li className={`uppercase`}>Works</li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
