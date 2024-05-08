import { useEffect, useState } from "react";

const BASE_URL = "https://api.jikan.moe/v4";

export function useFetchSeason(seasonId: number) {
    const [seasonData, setSeasonData] = useState<any>(null);
    
    useEffect(() => {
        fetchSeason(seasonId);
    }, [seasonId]);

    const fetchSeason = async (id: number) => {
        try {
            const response = await fetch(`${BASE_URL}/anime/${id}`);
            const data = await response.json();
            setSeasonData(data.data);
        } catch (error) {
            console.error("Error fetching anime data:", error);
        }
    };

    return seasonData;
};