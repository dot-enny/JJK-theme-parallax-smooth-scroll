import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CharacterProps {
    character: any;
}
const CharacterImgVariants = {
    hidden: { scale: 0 },
    visible: { 
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
};

export const list = {
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const item = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

export default function Character({ character }: CharacterProps) {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        margin: "-125px"
    });
      
    return (
        <motion.div ref={sectionRef} className="h-[50vh] w-1/ my-20 flex justify-around shadow shadow-gray-800"
            variants={list}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div variants={CharacterImgVariants}>
                <img src={character.character.images.webp.image_url} alt={character.name} className="" />
            </motion.div>
            <motion.div 
                className="flex flex-col gap-5 text-end"
                variants={list} 
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.span variants={item} className="text-3xl font-light">{character.character.name}</motion.span>
                <motion.span variants={item} className="font-semibold">{character.role}</motion.span>
            </motion.div>
        </motion.div>
    )
}
