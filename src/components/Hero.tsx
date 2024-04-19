import { useState } from "react";
import { HighlightItem } from "./HighlightItem"
import { Navbar } from "./nav/Navbar"
import { NavMenu } from "./nav/NavMenu";
import { AnimatePresence } from "framer-motion";

export const Hero = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="h-screen relative flex flex-col justify-center">
        {/* Navbar */}
        <AnimatePresence>{isMenuOpen && <NavMenu />}</AnimatePresence>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {/* Background Video */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/JJK S2E1 - Trim.mp4" type="video/mp4" />
            </video>
        </div>
        {/* Text content */}
        <div className="flex flex-col items-center gap-24 max-xl:mt-10">
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-6xl max-w-[12ch] text-center font-serif">Jujutsu Kaisen</h1>
                <p>Defining the future of humans and curses</p>
                <button className="bg-white text-black uppercase px-6 py-2 rounded-md">
                    Watch
                </button>
            </div>
        </div>
        <div className="grid grid-cols-2 md:flex md:justify-between max-md:gap-y-10 sm:w-3/5 max-w-[900px] sm:mx-auto max-md:mt-10 max-sm:-mb-10 md:mt-20">
            <HighlightItem title="Season 1" content="24 Episodes" />
            <div className="w-[2px] h-full bg-white max-md:hidden" />
            <HighlightItem title="Season 2" content="24 Episodes" />
            <div className="w-[2px] h-full bg-white max-md:hidden" />
            <HighlightItem title="Genre" content="Action" />
            <div className="w-[2px] h-full bg-white max-md:hidden" />
            <HighlightItem title="Genre" content="Thriller" />
        </div>
    </section>
  )
}
