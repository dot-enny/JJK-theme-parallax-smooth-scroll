import React, { useState } from "react";
import { HighlightItem } from "./HighlightItem"
import { Navbar } from "./nav/Navbar"
import { NavMenu } from "./nav/NavMenu";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { easings } from "../utils/animations";

export const Hero = () => {

    const animeInfo = [
        { title: "Season 1", content: "24 Episodes" },
        { title: "Season 2", content: "24 Episodes" },
        { title: "Genre", content: "Action" },
        { title: "Genre", content: "Thriller" }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="h-screen relative flex flex-col justify-center">
            {/* Navbar & NavMenu */}
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
                    <div className="relative">
                        <h1 className="text-6xl max-w-[12ch] text-center font-serif">Jujutsu Kaisen</h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: 1.8,
                                duration: 0.8,
                                ease: easings.easeOutQuart,
                            },
                        }}
                    >
                        Defining the future of humans and curses
                    </motion.p>
                    <button className="bg-white text-black uppercase px-6 py-2 rounded-md">
                        Watch
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 md:flex md:justify-between max-md:gap-y-10 sm:w-3/5 max-w-[900px] sm:mx-auto max-md:mt-10 max-sm:-mb-10 md:mt-20">
                {animeInfo.map((item, index) => (
                    <React.Fragment key={index}>
                        <HighlightItem title={item.title} content={item.content} />
                        {(index !== animeInfo.length - 1) &&
                            <motion.div
                                className="w-[2px] h-full bg-white max-md:hidden origin-top"
                                initial={{ scaleY: 0 }}
                                animate={{
                                    scaleY: 1,
                                    transition: { duration: 0.8, ease: easings.easeInOutQuint, delay: 2.2 }
                                }}
                            />
                        }
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}
