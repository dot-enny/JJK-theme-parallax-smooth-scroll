import { useEffect, useState } from "react";
import { api } from "../api/api";

export function useFetchEpisodeThumbNails(seasonId: number | null) {
    const [animeVideos, setAnimeVideos] = useState<any>(null);

    useEffect(() => {
        if (seasonId !== null)
        fetchEpisodeThumbNails();
    }, [seasonId]);

    const fetchEpisodeThumbNails = async () => {
        try {
            const data = await api.get<{ data: any }>(`/anime/${seasonId}/videos/episodes`);
            setAnimeVideos(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    return animeVideos;
};