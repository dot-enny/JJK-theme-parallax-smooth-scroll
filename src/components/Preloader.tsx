import { AnimatePresence, motion } from "framer-motion";

import Logo from "../../public/jjk-logo.svg";
import { useState } from "react";
import { easings } from "../utils/animations/animations";

export const Preloader = () => {

  const PreloaderVariants = {
    exit: { y: "-100%", transition: { duration: 1.5, delay: 0.2, ease: easings.easeOutQuart } }
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.3 },
    animate: { 
      opacity: 1, 
      scale: 0.5,
      transition: { duration: 2, ease: easings.easeInOutQuint }
    },
    exit: { opacity: 0, transition: { duration: 0.2, ease: easings.easeInOutQuint } }
  };

  const [isLogoVisible, setIsLogoVisible] = useState(true);

  return (
    <motion.div className="fixed inset-0 z-50 bg-white flex justify-center items-center" variants={PreloaderVariants} exit="exit">
      <AnimatePresence mode="wait">
        {
          isLogoVisible &&
          <motion.img src={Logo} alt="JUJTSU KAISEN" variants={logoVariants} initial="initial" animate="animate" exit="exit"  onAnimationComplete={() => setIsLogoVisible(false)} />
        }
      </AnimatePresence>
    </motion.div>
  )
}
