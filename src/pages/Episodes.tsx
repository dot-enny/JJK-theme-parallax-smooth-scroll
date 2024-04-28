import React, { useEffect, useState } from "react";
import Episode from "../components/episodes/Episode";

const BASE_URL = "https://api.jikan.moe/v4";

export default function Episodes () {
    const [animeData, setAnimeData] = useState<any>(null);
    const [animeVideos, setAnimeVideos] = useState<any>(null);

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

    return (
        <div className="bg-black">
            {animeData && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-20 pb-10 px-14 gap-20">
                    {animeData.map((episode: any) => (
                        <React.Fragment key={episode.mal_id}>
                            <Episode episodeId={episode.mal_id} image={animeVideos[episode.mal_id]?.images.jpg.image_url} />
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>
    );
}