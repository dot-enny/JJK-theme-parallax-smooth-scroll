import React from "react";
import { HighlightItem } from "./HighlightItem"
import { motion } from "framer-motion";
import { DividerVariants, ParagraphVariants } from "../utils/animations/variants/Hero";

export const Hero = () => {

    const animeInfo = [
        { title: "Season 1", content: "24 Episodes" },
        { title: "Season 2", content: "24 Episodes" },
        { title: "Genre", content: "Action" },
        { title: "Genre", content: "Thriller" }
    ];

    return (
        <section className="h-screen relative flex flex-col justify-center">
            {/* Background Video */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <video autoPlay muted loop className="w-full h-full object-cover">
                    <source src="/JJK S2E1 - Trim.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Text content */}
            <div className="flex flex-col items-center gap-24 max-xl:mt-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-6xl leading-[66px] tracking-[-1.2px] text-center font-serif mb-4">Jujutsu Kaisen</h1>
                    <motion.p variants={ParagraphVariants} initial="initial" animate="animate" className="mb-8">
                        Defining the future of humans and curses
                    </motion.p>
                    <a href="https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen" target="blank" className="bg-white text-black uppercase px-6 py-2 rounded-md">Watch</a>
                </div>
            </div>
            <div className="grid grid-cols-2 md:flex md:justify-between max-md:gap-y-10 sm:w-3/5 max-w-[900px] sm:mx-auto max-md:mt-10 max-sm:-mb-10 md:mt-20">
                {animeInfo.map((item, index) => (
                    <React.Fragment key={index}>
                        <HighlightItem title={item.title} content={item.content} />
                        {(index !== animeInfo.length - 1) &&
                            <motion.div className="w-[2px] h-full bg-white max-md:hidden origin-top" variants={DividerVariants} initial="initial" animate="animate" />
                        }
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}
