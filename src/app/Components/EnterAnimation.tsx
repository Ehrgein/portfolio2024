import { motion } from "framer-motion";
import { compacta } from "../helpers/fonts";

const EnterAnimation = () => {
  return (
    <motion.div
      initial={{ y: 0 }} // Starting position above the viewport
      animate={{ y: "-100vh" }} // Ending position at the top of the viewport
      transition={{ duration: 1.2, ease: [0.32, 0, 0.2, 1], delay: 1 }}
      className="inset-0 absolute bg-[#121212]"
    >
      <p
        className={`${compacta.className} text-white text-6xl flex h-[100vh] w-[100vw] justify-center items-center`}
      >
        KEEP MOVING
      </p>
    </motion.div>
  );
};

export default EnterAnimation;
