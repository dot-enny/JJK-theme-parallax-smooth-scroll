import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import Gojo from "/img/jjk-gojo.jpg";
import Megumi from "/img/jjk-megumi.jpg";
import Yuji from "/img/jjk-yuji.jpg";
import Nobara from "/img/jjk-nobara.jpg";
import { useEffect, useState } from "react";
import Lenis from '@studio-freight/lenis'
import { Preloader } from "../components/Preloader";
import { AnimatePresence } from "framer-motion";

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    };
    requestAnimationFrame(raf)
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <main className="min-h-screen text-white">
        <Hero />
        <Section
          image={Gojo}
          tag="Gojo Satorou"
          title="The Strongest Jujutsu Sorcerer"
          description="Gojo Satorou is the strongest jujutsu sorcerer in the world. He is a teacher at Tokyo Metropolitan Curse Technical College and is known for his limitless cursed energy and Six Eyes technique."
        />
        <Section
          image={Megumi}
          tag="Fushiguro Megumi"
          title="The Heir of the Zenin Clan"
          description="Fushiguro Megumi is a student at Tokyo Metropolitan Curse Technical College. He is a descendant of the Zenin clan and is known for his ability to summon Shikigami."
        />
        <Section
          image={Yuji}
          tag="Itadori Yuji"
          title="The Host of Sukuna"
          description="Itadori Yuji is a student at Tokyo Metropolitan Curse Technical College. He is the host of Ryomen Sukuna, the King of Curses, and is known for his immense physical strength."
        />
        <Section
          image={Nobara}
          tag="Kugisaki Nobara"
          title="The Exterminator"
          description="Kugisaki Nobara is a student at Tokyo Metropolitan Curse Technical College. She is known for her ability to control nails and is a skilled exorcist."
        />
      </main>
    </>
  )
};
