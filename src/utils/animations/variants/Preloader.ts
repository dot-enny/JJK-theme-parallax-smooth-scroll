import { easings } from "../animations";

const PreloaderVariants = {
    exit: { y: "-100%", transition: { duration: 1.5, delay: 0.5, ease: easings.easeOutQuart } }
};

const logoVariants = {
    initial: { opacity: 0, scale: 0.3 },
    animate: {
        opacity: 1,
        scale: 0.5,
        transition: { duration: 2, ease: easings.easeInOutQuint }
    },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export { PreloaderVariants, logoVariants }