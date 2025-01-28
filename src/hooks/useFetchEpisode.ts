import { useEffect, useState } from "react";

const BASE_URL = "https://api.jikan.moe/v4";

export function useFetchEpisode(seasonId: number | null, episodeId: number) {
    const [episodeData, setEpisodeData] =  useState<any>();

    useEffect(() => {
        if (seasonId !== null)
        fetchEpisode();
    }, []);

    const fetchEpisode = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/${seasonId}/episodes/${episodeId}`);
            const data = await response.json();
            setEpisodeData(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };
    return episodeData;
};