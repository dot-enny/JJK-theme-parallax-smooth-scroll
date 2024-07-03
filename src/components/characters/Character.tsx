import { easeInOut, motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CharacterProps {
    character: any;
    index: number
}
const CharacterImgVariants = (index: number) => ({
    hidden: { 
        scale: 0,
        rotate: index % 2 == 0 ? 45 : -45
    },
    visible: { 
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
            type: 'spring',
            damping: 30,
        }
    }
});

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

export default function Character({ character, index }: CharacterProps) {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        margin: "-125px"
    });
      
    return (
        <motion.div ref={sectionRef} className="h-[55vh] my-20 flex justify-around shadow shadow-gray-800"
            variants={list}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div variants={CharacterImgVariants(index)}>
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
