import { useEffect, useState } from "react";

const BASE_URL = "https://api.jikan.moe/v4";

export function useFetchAnimeData(seasonId: number | null) {
    const [animeData, setAnimeData] = useState<any>(null);
    
    useEffect(() => {
        if (seasonId !== null)
        fetchAnimeData();
    }, [seasonId]);

    const fetchAnimeData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/anime/${seasonId}/episodes`);
            const data = await response.json();
            setAnimeData(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    return animeData;
};