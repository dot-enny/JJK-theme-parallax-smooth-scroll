import { useMotionValueEvent, useScroll } from "framer-motion";
import { NavMenuToggle } from "./NavMenuToggle"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useEpisodeDetail } from "../../context/EpisodeDetailContext";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export const Navbar = ({isMenuOpen, setIsMenuOpen}: NavbarProps) => {

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const isEpisodeDetailOpen = useEpisodeDetail();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() as unknown as number;
    if (latest > previous && latest > 150 && !isMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false)
    };
  })

  useEffect(() => {
    isEpisodeDetailOpen ? setHidden(true) : setHidden(false);
  }, [isEpisodeDetailOpen])

  return (
    <>
    {/* large to extralarge screens */}
      <motion.nav 
        className="max-lg:hidden fixed z-10 inset-x-0 top-0 h-16 flex justify-between items-center px-20 bg-gradient-to-b from-black to-black/0"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={ hidden ? "hidden" : "visible" }
        transition={{ duration: 0.3, type: 'ease' }}
      >
          <span className="font-extrabold text-2xl mix-blend-difference">Jujutsu Kaisen</span>
          <ul className="flex gap-6 z-10 mix-blend-difference">
              <li><a href="/">Home</a></li>
              <li><a href="/seasons">Seasons</a></li>
              <li><a href="/characters">Characters</a></li>
          </ul>
      </motion.nav>
      {/* small to medium screens */}
      <motion.div 
        className="lg:hidden w-full flex justify-between items-center p-4 md:p-8 fixed top-0 mix-blend-difference z-10"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={ hidden ? "hidden" : "visible" }
      >
        <span className="font-extrabold text-2xl">Jujutsu Kaisen</span>
        <NavMenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />      
      </motion.div>
    </>
  )
}
