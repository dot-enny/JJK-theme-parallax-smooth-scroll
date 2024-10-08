import { useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis'
import { Navbar } from "./nav/Navbar"
import { NavMenu } from "./nav/NavMenu";
import { AnimatePresence } from "framer-motion";
import { useEpisodeDetail } from "../context/EpisodeDetailContext";

export default function Layout ({ children }: { children: React.ReactNode }) {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isEpisodeDetailOpen = useEpisodeDetail();

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    };
    requestAnimationFrame(raf);

    (isMenuOpen || isEpisodeDetailOpen) ? lenis.stop() : lenis.start()
    
    return () => lenis.destroy();
  }, [isMenuOpen, isEpisodeDetailOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen])

  return (
    <div className=" text-white">
        {/* Navbar on large screens & NavMenu on small to medium screens */}
        <AnimatePresence>{isMenuOpen && <NavMenu />}</AnimatePresence>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          {children}
        </main>
    </div>
  )
};