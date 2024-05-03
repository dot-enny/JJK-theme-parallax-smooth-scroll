import { DetailItem } from "./DetailItem";
import { HideEpisodeDetails } from "./HideEpisodeDetails";
import { AnimatePresence, animate, motion } from "framer-motion";

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
        >
            <motion.div variants={DetailVariants}>
                <HideEpisodeDetails toggleDetails={toggleDetails} />
                <div className="w-3/4 mx-auto pt-10">
                    <div className="grid grid-cols-2">
                        <div>
                            <DetailItem label="Episode" value={episode.mal_id} />
                            <DetailItem label="Duration" value={`${Math.round(episode.duration / 60)} minutes`} />
                            <DetailItem label="English Title" value={episode.title} />
                            <DetailItem label="Japanese Title" value={episode.title_japanese} />
                            <DetailItem label="Romanji Title" value={episode.title_romanji} />
                            <DetailItem label="Aired" value={episode.aired} />
                            <DetailItem link label="MAL Reference" value={episode.url} />
                        </div>
                        {/* episode thumbnail */}
                        <img src={episode.image} alt="episode image" className="justify-self-end self-center h-full" />
                    </div>
                    {/* episode synopsis */}
                    <p className="mt-32">{episode.synopsis}</p>
                </div>
            </motion.div>
        </motion.div>
    )
};