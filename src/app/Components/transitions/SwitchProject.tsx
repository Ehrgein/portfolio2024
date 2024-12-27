import React from "react";
import { motion } from "framer-motion";

function SwitchProject() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: [0.32, 0, 0.2, 1] }}
      className="inset-0 absolute bg-[#EDE9DE] z-[99999999999999999999999] h-full"
    ></motion.div>
  );
}

export default SwitchProject;
