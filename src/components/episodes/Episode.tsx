import { useEffect, useState } from "react";
import { EpisodeDetails } from "./episode-details/EpisodeDetails"

const BASE_URL = "https://api.jikan.moe/v4";

export default function Episode({ episodeId, image, setPointerEvents } : { episodeId: number, image: string, setPointerEvents: () => void }) {
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
            {episodeData && (
                <>
                    {/* episode card */}
                    <button
                        className="m-auto"
                        onClick={toggleDetails}
                    >
                        {episodeData.mal_id && <img src={image} alt="episode image" />}
                        <div className="flex justify-start text-lg font-semibold cursor-pointer mt-5">
                            <span>{episodeData.mal_id}</span>
                            <span className="mr-2">.</span>
                            <span>{episodeData.title.slice(0, 20)}</span>
                        </div>

                    </button>

                    {/* episode details */}
                    {episodeDetails && 
                        <EpisodeDetails episode={{image, ...episodeData}} toggleDetails={toggleDetails} />}
                </>
            )}
        </>
    );
}


