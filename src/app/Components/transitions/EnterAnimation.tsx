import { motion } from "framer-motion";
import { compacta } from "../../helpers/fonts";
import Image from "next/image";

import keepmoving from "../../Assets/svgs/keepmoving.svg";

const EnterAnimation = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100vh" }}
      transition={{ duration: 1, ease: [0.32, 0, 0.2, 1], delay: 0.6 }}
      className="inset-0 absolute bg-[#161616] z-50"
    >
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
