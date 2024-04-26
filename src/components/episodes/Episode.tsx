import { useEffect, useState } from "react";

const BASE_URL = "https://api.jikan.moe/v4";

export default function Episode({ episodeId, image }: { episodeId: number, image: string }) {
    const [episodeData, setEpisodeData] = useState<any>(null);

    useEffect(() => {
        fetchEpisodeData();
    }, []);

    const fetchEpisodeData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/40748/episodes/${episodeId}`);
            const data = await response.json();
            setEpisodeData(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    return (
        <>
            {episodeData && (
                <>
                    <div className="p-4 h-[50vh] min-h-screen sm:px-20 py-24 grid gap-12 items-center">
                        { episodeData.mal_id && <img src={image} alt="episode image" className="justify-self-center" /> }
                        <div className="rounded-lg">
                            <div className="flex justify-between text-lg font-semibold mb-9">
                                <span>{episodeData.mal_id}</span>
                                <span>{episodeData.title}</span>
                            </div>
                            <p className="">{episodeData.synopsis.slice(0, 300)}...</p>
                            <span 
                                className="underline text-gray-400 cursor-pointer"
                                onClick={() => setEpisodeDetails(true)}
                            >
                                see details
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}