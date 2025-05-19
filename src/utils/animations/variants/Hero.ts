import { easings } from "../animations";

export const ParagraphVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            delay: 5,
            duration: 1,
            ease: easings.easeOutQuart,
        },
    }
};

export const DividerVariants = {
    initial: { scaleY: 0 },
    animate: {
        scaleY: 1,
        transition: { duration: 1, ease: easings.easeInOutQuint, delay: 5.4 }
    }
};