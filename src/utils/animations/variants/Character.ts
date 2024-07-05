export const CharacterImgVariants = (index: number) => ({
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