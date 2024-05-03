import { useEffect, useState } from "react";
import Episode from "../components/episodes/Episode";
import { motion } from "framer-motion";

const BASE_URL = "https://api.jikan.moe/v4";

export default function Episodes () {
    const [animeData, setAnimeData] = useState<any>(null);
    const [animeVideos, setAnimeVideos] = useState<any>(null);
    const [pointerEvents, setPointerEvents] = useState<boolean>(false);

    const togglePointerEvents = () => {
        setPointerEvents(!pointerEvents);
    }

    useEffect(() => {
        fetchAnimeData();
        fetchAnimeVideosEpisodes();
    }, []);

    const fetchAnimeData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/40748/episodes`);
            const data = await response.json();
            setAnimeData(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    const fetchAnimeVideosEpisodes = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/40748/videos/episodes`);
            const data = await response.json();
            setAnimeVideos(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
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
                            <Episode episodeId={episode.mal_id} image={animeVideos[episode.mal_id]?.images.jpg.image_url} setPointerEvents={togglePointerEvents} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}