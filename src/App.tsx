import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import Gojo from "/jjk-gojo.jpg";
import Megumi from "/jjk-megumi.jpg";
import Yuji from "/jjk-yuji.jpg";
import Nobara from "/jjk-nobara.jpg";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'

export default function App () {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    };
    requestAnimationFrame(raf)
  }, []);

  return (
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
  )
};
 