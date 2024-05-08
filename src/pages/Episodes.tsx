import { useState } from "react";
import Episode from "../components/episodes/Episode";
import { motion } from "framer-motion";
import { Seasons } from "../components/seasons/Seasons";
import { useFetchAnimeData } from "../hooks/useFetchAnimeData";
import { useFetchAnimeVideosEpisodes } from "../hooks/useFetchAnimeVideosEpisodes";

export default function Episodes () {
    const [pointerEvents, setPointerEvents] = useState<boolean>(false);
    const [seasonId, setSeasonId] = useState<number>(0);
    const animeData = useFetchAnimeData(seasonId);
    const animeEpisodeThumbNails = useFetchAnimeVideosEpisodes(seasonId);

    const togglePointerEvents = () => {
        setPointerEvents(!pointerEvents);
    };

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

    return (
        <>
            {seasonId === 0 ? (
                <Seasons setSeasonId={setSeasonId} />
            ) : (                
                <div className={`bg-black min-h-screen ${pointerEvents ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                    {animeData && (
                        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-20 pb-10 px-14 gap-20"
                            variants={EpisodeGridVariants}
                            initial="initial"
                            animate="animate"
                        >
                            {animeData.map((episode: any) => (
                                <motion.div className="flex"
                                    key={episode.mal_id}
                                    variants={EpisodeVariants}
                                >
                                    <Episode episodeId={episode.mal_id} image={animeEpisodeThumbNails[episode.mal_id]?.images.jpg.image_url} setPointerEvents={togglePointerEvents} seasonId={seasonId} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            )
            }
        </>
    );
}