import { useEffect, useState } from "react";
import { api } from "../api/api";

// Define the type for the episode data
interface EpisodeData {
    mal_id: number;
    title: string;
    aired: { from: string };
    filler: boolean;
    recap: boolean;
    [key: string]: any; // Add additional fields as needed
}

export function useFetchEpisode(seasonId: number | null, episodeId: number) {
    const [episodeData, setEpisodeData] = useState<EpisodeData | undefined>();

    useEffect(() => {
        if (seasonId !== null) fetchEpisode();
    }, [seasonId, episodeId]);

    const fetchEpisode = async () => {
        try {
            const data = await api.get<{ data: EpisodeData }>(`/anime/${seasonId}/episodes/${episodeId}`);
            setEpisodeData(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    return episodeData;
}