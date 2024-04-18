import { HighlightItem } from "./HighlightItem"
import { Navbar } from "./Navbar"

export const Hero = () => {

  return (
    <section className="h-screen relative flex flex-col justify-center">
        {/* Navbar */}
        <Navbar />
        {/* Background Video */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/JJK S2E1 - Trim.mp4" type="video/mp4" />
            </video>
        </div>
        {/* Text content */}
        <div className="flex flex-col items-center gap-24">
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-6xl max-w-[15ch] text-center font-serif">Jujutsu Kaisen</h1>
                <p>Defining the future of humans and curses</p>
                <button className="bg-white text-black uppercase px-6 py-2 rounded-md">
                    Watch
                </button>
            </div>
        </div>
        <div className="flex justify-between w-3/5 max-w-[900px] mx-auto mt-20">
            <HighlightItem title="Season 1" content="24 Episodes" />
            <div className="w-[2px] h-full bg-white" />
            <HighlightItem title="Season 2" content="24 Episodes" />
            <div className="w-[2px] h-full bg-white" />
            <HighlightItem title="Genre" content="Action" />
            <div className="w-[2px] h-full bg-white" />
            <HighlightItem title="Genre" content="Thriller" />
        </div>
    </section>
  )
}
