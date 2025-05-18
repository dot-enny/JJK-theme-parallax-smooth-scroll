import Episode from "../components/episodes/Episode";
import { motion } from "framer-motion";
import { EpisodeGridVariants, EpisodeVariants } from "../utils/animations/variants/Episodes";
import { useEpisodes } from "../hooks/episodes/useEpisodes";

export default function Episodes() {
    const { pointerEvents, togglePointerEvents, animeData, animeEpisodeThumbNails, seasonId } = useEpisodes();

    return (
        <>
            <div className={`min-h-screen ${pointerEvents ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                {animeData && animeEpisodeThumbNails && (
                    // GRID CONTAINER
                    <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-20 pb-10 px-14 gap-20"
                        variants={EpisodeGridVariants}
                        initial="initial"
                        animate="animate"
                    >
                        {/* MAPPED EPISODE CARDS */}
                        {animeData.map((episode: any, index: number) => (
                            <motion.div className="flex"
                                key={episode.mal_id}
                                variants={EpisodeVariants}
                            >
                                <Episode episodeId={episode.mal_id} image={animeEpisodeThumbNails[index]?.images.jpg.image_url} setPointerEvents={togglePointerEvents} seasonId={seasonId} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </>
    );
}
