import { useEffect, useState } from "react";
import { EpisodeDetails } from "./episode-details/EpisodeDetails"
import { AnimatePresence } from "framer-motion";

const BASE_URL = "https://api.jikan.moe/v4";

export default function Episode({ episodeId, image, setPointerEvents }: { episodeId: number, image: string, setPointerEvents: () => void }) {
    const [episodeData, setEpisodeData] = useState<any>(null);
    const [episodeDetails, setEpisodeDetails] = useState<boolean>(false);

    const toggleDetails = () => {
        setEpisodeDetails(!episodeDetails);
        setPointerEvents();
    };

    useEffect(() => {
        fetchEpisodeData();
    }, []);

    const fetchEpisodeData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/40748/episodes/${episodeId}`);
            const data = await response.json();
            setEpisodeData(data.data);
            episodeId == 1 ? console.log(data) : null;
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
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
                    {episodeDetails && 
                        <EpisodeDetails episode={{image, ...episodeData}} toggleDetails={toggleDetails} />}
                </>
            )}
        </>
    );
}


