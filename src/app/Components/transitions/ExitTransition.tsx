import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function ExitTransition() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{
          duration: 1.0, // Reduce the duration further for quicker movement
          ease: [0.5, 0, 0.3, 1], // Faster start and more acceleration
          delay: 0.05,
        }}
        className="fixed bottom-0 left-0 w-full h-full bg-[#121212] z-[99999999999999999999999]"
      />
    </AnimatePresence>
  );
}

export default ExitTransition;
