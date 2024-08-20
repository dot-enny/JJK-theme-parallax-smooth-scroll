import { DetailItem } from "./DetailItem";
import { HideEpisodeDetails } from "./HideEpisodeDetails";
import { motion } from "framer-motion";

interface EpisodeProps {
    episode: any;
    toggleDetails: () => void;
}

const EpisodeDetailsVariants = {
    initial: { scale: 0, opacity: 0, y: '100%' },
    animate: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        }
    },
    exit: {
        scale: 2,
        opacity: 0,
        transition: {
            ease: 'easeOut'
        } 
    }
};

const DetailVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2,
        }
    }
}

export const EpisodeDetails = ({ episode, toggleDetails }: EpisodeProps) => {
    return (
        <motion.div
            variants={EpisodeDetailsVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-20 bg-gradient-to-b from-purple-950/95 via-pink-950 to-black/95 fixed inset-0 rounded pointer-events-none"
            data-lenis-prevent
        >
            <motion.div variants={DetailVariants} className="h-full">
                <HideEpisodeDetails toggleDetails={toggleDetails} />
                <div className="max-md:p-4 max-lg:p-8 lg:w-3/4 mx-auto pt-10 h-full">
                    <div className="grid lg:grid-cols-2">
                        <div className="grid max-md:gap-y-1">
                            <DetailItem label="Episode" value={episode.mal_id} />
                            <DetailItem label="Duration" value={`${Math.round(episode.duration / 60)} minutes`} />
                            <DetailItem label="English Title" value={episode.title} />
                            <DetailItem label="Japanese Title" value={episode.title_japanese} />
                            <DetailItem label="Romanji Title" value={episode.title_romanji} />
                            <DetailItem label="Aired" value={episode.aired} />
                            <DetailItem link label="MAL Reference" value={episode.url} />
                        </div>
                        {/* episode thumbnail */}
                        <img src={episode.image} alt="episode image" className="justify-self-end self-center h-full max-md:hidden" />
                    </div>
                    {/* episode synopsis */}
                    <div className="mt-8 md:mt-32 h-[60%] overflow-auto pointer-events-auto">
                        <p>{episode.synopsis}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
};