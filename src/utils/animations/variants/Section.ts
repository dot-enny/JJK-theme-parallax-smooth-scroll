export const list = {
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export const item = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};