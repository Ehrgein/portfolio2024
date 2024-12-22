import React from "react";
import { motion } from "framer-motion";

function MagneticSVG({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;

    if (ref.current) {
      const { width, height, left, top } = ref.current?.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      setPosition({ x, y });
    }
  };

  const onMouseLeave = (e) => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      animate={{ x, y }}
      onMouseMove={mouseMove}
      onMouseLeave={onMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.2 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}

export default MagneticSVG;
