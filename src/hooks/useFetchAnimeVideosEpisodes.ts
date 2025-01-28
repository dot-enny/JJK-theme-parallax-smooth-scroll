import { useEffect, useState } from "react";

const BASE_URL = "https://api.jikan.moe/v4";

export function useFetchAnimeVideosEpisodes(seasonId: number | null) {
    const [animeVideos, setAnimeVideos] = useState<any>(null);

    useEffect(() => {
        if (seasonId !== null)
        fetchAnimeVideosEpisodes();
    }, [seasonId]);

    const fetchAnimeVideosEpisodes = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/${seasonId}/videos/episodes`);
            const data = await response.json();
            setAnimeVideos(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    return animeVideos;
};