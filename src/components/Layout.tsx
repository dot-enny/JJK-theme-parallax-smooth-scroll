import { useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis'
import { Navbar } from "./nav/Navbar"
import { NavMenu } from "./nav/NavMenu";
import { AnimatePresence } from "framer-motion";

export default function Layout ({ children }: { children: React.ReactNode }) {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    };
    requestAnimationFrame(raf)
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // hide scroll-bar and reset scroll position to top when menu is open
    // navbar only displays when user is at top of the page 
    // so there won't be any weird behavior where the user is scrolled down the page 
    // and then opens the menu and the scroll position is reset to the top
    // this is to avoid scrolling down the page while the menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    window.scrollTo(0, 0);
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
 