import { useMotionValueEvent, useScroll } from "framer-motion";
import { NavMenuToggle } from "./NavMenuToggle"
import { useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const Navbar = ({isMenuOpen, setIsMenuOpen}: NavbarProps) => {

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() as unknown as number;
    if (latest > previous && !isMenuOpen) {
      setHidden(true);
    };
    if (latest < 20) {
      setHidden(false)
    };
  })

  return (
    <>
    {/* large to extralarge screens */}
      <nav className="max-lg:hidden absolute inset-x-0 top-0 h-16 flex justify-between items-center px-20 bg-gradient-to-b from-black to-black/0">
          <span className="font-extrabold text-2xl">Jujutsu Kaisen</span>
          <ul className="flex gap-6">
              <li><a href="#">Home</a></li>
              <li><a href="#">Episodes</a></li>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Watch</a></li>
          </ul>
      </nav>
      {/* small to medium screens */}
      <motion.div 
        className="lg:hidden w-full flex justify-between items-center p-8 fixed top-0 mix-blend-difference z-[100]"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={ hidden ? "hidden" : "visible" }
        // transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <span className="font-extrabold text-2xl">Jujutsu Kaisen</span>
        <NavMenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />      
      </motion.div>
    </>
  )
}
