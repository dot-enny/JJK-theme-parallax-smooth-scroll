import { AnimatePresence, motion } from "framer-motion";

import Logo from "../../public/jjk-logo.svg";
import { useState } from "react";
import { logoVariants, PreloaderVariants } from "../utils/animations/variants/Preloader";

export const Preloader = () => {

  const [isLogoVisible, setIsLogoVisible] = useState(true);

  return (
    <motion.div className="fixed inset-0 z-50 bg-white flex justify-center items-center" variants={PreloaderVariants} exit="exit">
      <AnimatePresence>
        {
          isLogoVisible &&
          <motion.img src={Logo} alt="JUJTSU KAISEN" variants={logoVariants} initial="initial" animate="animate" exit="exit"  onAnimationComplete={() => setIsLogoVisible(false)} />
        }
      </AnimatePresence>
    </motion.div>
  )
}
