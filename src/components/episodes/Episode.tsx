import { useState } from "react";
import { EpisodeDetails } from "./episode-details/EpisodeDetails"
import { AnimatePresence } from "framer-motion";
import { useFetchEpisode } from "../../hooks/useFetchEpisode";


export default function Episode({ episodeId, image, setPointerEvents, seasonId }: { episodeId: number, image: string, setPointerEvents: () => void, seasonId: number | null }) {
    const episodeData = useFetchEpisode(seasonId, episodeId);
    const [episodeDetails, setEpisodeDetails] = useState<boolean>(false);

    const toggleDetails = () => {
        setEpisodeDetails(!episodeDetails);
        setPointerEvents();
    };

    return (
        <>
            {/* episode card */}
            <button
                className="m-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={toggleDetails}
            >
                {episodeData ? (
                    <>
                        {episodeData.mal_id && <img src={image} alt="episode image" className="w-[200px] h-[113px]" />}
                        <div className="flex justify-start text-lg font-semibold cursor-pointer mt-5">
                            <span>{episodeData.mal_id}</span>
                            <span className="mr-2">.</span>
                            <span>{episodeData.title.slice(0, 20)}</span>
                        </div>
                    </>
                ) : (
                    <div>
                        <div className="w-[200px] h-[113px] bg-gradient-to-b from-slate-900 via-gray-700 to-slate-900 animate-pulse" />
                        <div className="flex justify-start text-lg font-semibold cursor-pointer mt-5">
                            <span>{episodeId}</span>
                            <span className="mr-2">.</span>
                            <span className="w-full bg-gradient-to-b from-slate-900 via-gray-700 to-slate-900 animate-pulse"></span>
                        </div>
                    </div>
                )}
            </button>

            {/* episode details */}
            <AnimatePresence>
                {episodeDetails && episodeData &&
                    <EpisodeDetails episode={{ image, ...episodeData }} toggleDetails={toggleDetails} />}
            </AnimatePresence>
        </>
    );
}


