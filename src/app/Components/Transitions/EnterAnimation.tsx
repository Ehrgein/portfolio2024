import { motion } from "framer-motion";
import { compacta } from "../../helpers/fonts";
import Image from "next/image";

import keepmoving from "../../Assets/svgs/keepmoving.svg";

const EnterAnimation = () => {
  return (
    <motion.div
      initial={{ y: 0 }} // Starting position above the viewport
      animate={{ y: "-100vh" }} // Ending position at the top of the viewport
      transition={{ duration: 1, ease: [0.32, 0, 0.2, 1], delay: 0.6 }}
      className="inset-0 absolute bg-[#121212]"
    >
      {/* <p
        className={`${compacta.className} text-white text-8xl flex h-[100vh] justify-center items-center`}
      >
        KEEP MOVING
      </p> */}
      <div className="w-full flex h-[100vh] justify-center items-center">
        <Image
          src={keepmoving}
          alt=""
          className={`${compacta.className} text-white text-8xl w-[600px]`}
        />
      </div>
    </motion.div>
  );
};

export default EnterAnimation;
