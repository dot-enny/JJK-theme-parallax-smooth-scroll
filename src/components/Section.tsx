import { motion, useInView } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react"
import { item, list } from "../utils/animations/variants/Section";

export const Section = (
  {image, tag, title, description}: 
  {image: string, tag: string, title: string, description: string}) => {

  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"])

  const isInView = useInView(sectionRef, {
    margin: "-100px"
  });

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden max-sm:flex max-sm:items-end max-sm:pb-10">
      <motion.div className="absolute w-full h-[105%] -z-10" style={{ top:  y }}>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </motion.div>
      <motion.div 
        className="flex flex-col gap-4 max-sm:p-4 p-24"
        variants={list}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.span className="uppercase text-xs" variants={item}>{tag}</motion.span>
        <motion.h1 className="font-serif text-4xl max-w-[25ch]" variants={item}>{title}</motion.h1>
        <motion.p className="max-w-[50ch]" variants={item}>{description}</motion.p>
      </motion.div>
    </section>
  )
}
