import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react"

export const Section = (
  {image, tag, title, description}: 
  {image: string, tag: string, title: string, description: string}) => {

  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden max-sm:flex max-sm:items-end max-sm:pb-10">
      <motion.div className="absolute w-full h-[105%] -z-10" style={{ top:  y }}>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </motion.div>
      <div className="flex flex-col gap-4 max-sm:p-4 p-24">
        <span className="uppercase text-xs">{tag}</span>
        <h1 className="font-serif text-4xl max-w-[25ch]">{title}</h1>
        <p className="max-w-[50ch]">{description}</p>
      </div>
    </section>
  )
}
