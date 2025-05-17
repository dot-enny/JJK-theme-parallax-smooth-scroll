const EpisodeGridVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0,
            staggerChildren: 0.1
        }
    },
}

const EpisodeVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.8
        }
    }
}

export { EpisodeGridVariants, EpisodeVariants };