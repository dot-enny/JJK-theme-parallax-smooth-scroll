import ArrowDownRight from "../../../public/icons/arrow-down-right.svg"
import { motion } from "framer-motion";
import { arrowMotion, dividerMotion, itemContentMotion, itemCoverMotion } from "../../utils/animations";
import { useState } from "react";

interface NavMenuItemProps {
    index: number;
    title: string;
    path: string;
}

export const NavMenuItem = ({ index, title, path }: NavMenuItemProps) => {

    const [isLoading, setIsLoading] = useState(true);

    return (
        <motion.li
            className={`text-black cursor-pointer py-8 relative w-full ${
                isLoading ? "pointer-events-none" : "pointer-events-auto"
            }`}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onAnimationComplete={() => setIsLoading(false)}
        >
            <div className="flex items-center relative w-full">
                <motion.div className="absolute inset-0 bg-[#eee9e4]" variants={itemCoverMotion} />
                <motion.span className="w-[4ch] text-xl md:text-2xl" variants={itemContentMotion}>
                    {index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
                </motion.span>
                <a href={path} className="uppercase tracking-wide text-3xl md:text-4xl flex-1">{title}</a>
                <motion.div variants={arrowMotion}>
                    <img src={ArrowDownRight} alt=" " className="w-6 h-6" />
                </motion.div>
            </div>
            <motion.div className="absolute bottom-0 h-[2px] bg-black w-full origin-left" variants={dividerMotion} />
        </motion.li>
    )
}
