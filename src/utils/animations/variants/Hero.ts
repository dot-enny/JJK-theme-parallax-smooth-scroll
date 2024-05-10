import { easings } from "../animations";

export const ParagraphVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.8,
            duration: 0.8,
            ease: easings.easeOutQuart,
        },
    }
};

export const DividerVariants = {
    initial: { scaleY: 0 },
    animate: {
        scaleY: 1,
        transition: { duration: 0.8, ease: easings.easeInOutQuint, delay: 1 }
    }
};